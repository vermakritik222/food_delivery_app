import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, clear } from "../store/authSlice";
import api from "../http";
import VenderScreen from "../pages/VenderScreen";
import VenderMenu from "../pages/VenderMenu";
import VenderState from "../pages/VenderState";
import VenderProduct from "../pages/VenderProduct";

function VenderRouter() {
  return (
 
      <div>
        <Switch>
          <Route path="/vender/oders" exact>
            <VenderScreen />
          </Route>

          <Route path="/vender/menu" exact>
            <VenderMenu />
          </Route>

          <Route path="/vender/state" exact>
            <VenderState />
          </Route>

          <Route path="/vender/products" exact>
            <VenderProduct />
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

export default VenderRouter;
