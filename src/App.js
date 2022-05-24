import "./App.css";
import "./util/animation/Animation.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuScreen from "./pages/MenuScreen";
import VenderScreen from "./pages/VenderScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/menu">
            <MenuScreen />
          </Route>

          <Route path="/vender">
            <VenderScreen />
          </Route>

          <Route path="/oderid">
            <VenderScreen oderId />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
