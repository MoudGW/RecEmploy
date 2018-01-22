import React from "react";

const Navbar = props => (

    <div className="navbar-fixed">
    <nav className="grey lighten-2" role="navigation">
      <div className="nav-wrapper container"><a id="logo-container" href="#" className="material-icons red-text darken-2">videocam</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#" className="red-text darken-2">Sign in</a></li>
        </ul>
  
        <ul id="nav-mobile" className="side-nav">
          <li><a href="#" className="red-text darken-2">Sign in</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    </nav>
    </div>

);

export default Navbar;