import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import MenuScreen from "./pages/MenuScreen";
import VenderScreen from "./pages/VenderScreen";
import CartScreen from "./pages/CartScreen";
import Signup from "./pages/Signup";
import VenderMenu from "./pages/VenderMenu";
import VenderState from "./pages/VenderState";
import VenderProduct from "./pages/VenderProduct";
import { verify } from "./http";
import api from "./http";
import { setAuth, clear } from "./store/authSlice";
import "./util/animation/Animation.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/*  */}
          <ProtectedRoute path="/" exact>
            <Home />
          </ProtectedRoute>

          <GuestRoute path="/signup" exact>
            <Signup />
          </GuestRoute>

          <Route path="/restaurant/:resId">
            <MenuScreen />
          </Route>

          <Route path="/vender" exact>
            <Signup vender />
          </Route>

          <Route path="/vender/dashboard">
            <VenderScreen />
          </Route>

          <Route path="/vendermenu" exact>
            <VenderMenu />
          </Route>

          {/* <Route path="/vendermenu/:id">
            <VenderMenu hasId />
          </Route> */}

          <Route path="/venderstat">
            <VenderState />
          </Route>

          <Route path="/venderproduct">
            <VenderProduct />
          </Route>

          <Route path="/oderid">
            <VenderScreen oderId />
          </Route>

          <Route path="/cart">
            <CartScreen />
          </Route>
          {/*  */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.authSlice);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/",
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

const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector(
    (state) => state.authSlice.isAuthenticated
  );

  const dispatch = useDispatch();
  api.get(`/auth/verify`).then((res) => {
    console.log(res.data);
    if (res.data) {
      dispatch(setAuth(res.data.data));
    }
  });
  console.log(isAuthenticated);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/signup",
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
