import React from "react";
import { BrowserRouter, Route,Switch}  from "react-router-dom";
import './App.css';
import Jobhome from "./components/Jobhome";
import Rec_home from "./components/Rec_home";
import home from "./components/home";
import profile from "./components/profile";
const App = () =>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={home}/>
        <Route  path="/Jobhome" component={Jobhome}/>
        <Route  path="/Rec_home" component={Rec_home}/>
        <Route  path="/user/:id" component={profile}/>
      </div>
    </BrowserRouter>

export default App;
