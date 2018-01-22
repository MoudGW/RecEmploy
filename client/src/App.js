import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Main from "./pages/Main";
import Homepage from "./pages/Homepage";

const App = () =>

  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/main" component={Main} />
    </Switch>
  </div>
</Router>;

export default App;
