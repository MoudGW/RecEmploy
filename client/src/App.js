import React from "react";
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
import './App.css';
import Jobhome from "./components/Jobhome";
import Rec_home from "./components/Rec_home";
import home from "./components/home"
const App = () =>
  <Router>
    <div>
       <Route exact path="/" component={home}>
       <Switch>
        <Route exact path="/Jobhome" component={Jobhome}/>
        <Route exact path="/Rec_home" component={Rec_home}/>
            </Switch>
        </Route>
    </div>
  </Router>;

export default App;
