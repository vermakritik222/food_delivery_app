import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuScreen from "./pages/MenuScreen";
import VenderScreen from "./pages/VenderScreen";
import CartScreen from "./pages/CartScreen";
import "./util/animation/Animation.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/restaurant/:metadata">
            <MenuScreen />
          </Route>

          <Route path="/vender">
            <VenderScreen />
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
