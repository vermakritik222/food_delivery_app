import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuScreen from "./pages/MenuScreen";
import VenderScreen from "./pages/VenderScreen";
import CartScreen from "./pages/CartScreen";
import Signup from "./pages/Signup";
import "./util/animation/Animation.scss";
import "./App.css";
import VenderMenu from "./pages/VenderMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/signup" exact>
            <Signup />
          </Route>

          <Route path="/restaurant/:resId">
            <MenuScreen />
          </Route>

          <Route path="/vender" exact>
            <VenderScreen />
          </Route>

          <Route path="/vendermenu">
            <VenderMenu />
          </Route>

          <Route path="/oderid">
            <VenderScreen oderId />
          </Route>

          <Route path="/cart">
            <CartScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
