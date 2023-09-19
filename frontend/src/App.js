import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Signup from "./pages/Signup";
import UserRouter from "./routers/UserRouter";
import VenderRouter from "./routers/VenderRouter";
import { verify } from "./http";
import api from "./http";
import { setAuth, clear } from "./store/authSlice";
import "./util/animation/Animation.scss";
import "./App.css";
import Login from "./pages/Login";

function App() {
  const isAuthenticated = useSelector(
    (state) => state.authSlice.isAuthenticated
  );
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    const getAuth = async () => {
      const res = await api.get(`/auth/verify`);
      console.log(res.data);
      if (res.data) {
        dispatch(setAuth(res.data.data));
      }
      setIsLoading(false);
    };
    getAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/signup" exact>
            <Signup />
          </Route>

          <Route path="/signup/vender" exact>
            <Signup vender />
          </Route>

          <ProtectedRoute isAuthenticated={isAuthenticated} path="/" exact >
            <UserRouter />
          </ProtectedRoute>

          <ProtectedRoute isAuthenticated={isAuthenticated} path="/vender">
            <VenderRouter />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const ProtectedRoute = ({ children, isAuthenticated, ...rest }) => {
  console.log(isAuthenticated);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

export default App;
