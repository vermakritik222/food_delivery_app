import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, clear } from "../store/authSlice";
import api from "../http";
import Home from "../pages/Home";
import MenuScreen from "../pages/MenuScreen";
import CartScreen from "../pages/CartScreen";

function UserRouter() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/restaurant/:resId" exact >
          <MenuScreen />
        </Route>

        <Route path="/cart" exact>
          <CartScreen />
        </Route>
      </Switch>
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

export default UserRouter;
