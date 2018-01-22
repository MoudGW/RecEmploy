import React from "react";
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
import './App.css';
import Jobhome from "./components/Jobhome";
import Rec_home from "./components/Rec_home";
const App = () =>
  <Router>
    <div>
    <Switch>
        <Route exact path="/Jobhome" component={Jobhome}/>
        <Route exact path="/Rec_home" component={Rec_home}/>
    </Switch>
    </div>
  </Router>;

export default App;
