import "./App.css";
import "./util/animation/Animation.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuScreen from "./pages/MenuScreen";
import VenderScreen from "./pages/VenderScreen";

function App() {
  // console.log("check from app");
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

          {/* <Route path="/vender"> */}
          {/* <VenderScreen /> */}
          {/* </Route> */}

          {/* <Route path="/oderid"> */}
          {/* <VenderScreen oderId /> */}
          {/* </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
