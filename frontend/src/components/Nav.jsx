import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const navStyle = {
    color: "white",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <h1 className="logo">YouLearn</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-links w-100">
          {!props.user ? <><li className="nav-item">

<Link className="nav-link" style={navStyle} to="/Login">
  Login
</Link>
</li> 
<div className="nav-item">
            <Link className="nav-link" style={navStyle} to="/Registration">
              <li> SignUp</li>
            </Link>
          </div>
<div className="nav-item">
            <Link className="nav-link" style={navStyle} to="/Imprint">
              <li>Imprint</li>
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" style={navStyle} to="/About">
              <li>About</li>
            </Link>
          </div>
         
</> : <>
        
          <div className="nav-item">
            <Link className="nav-link" style={navStyle} to="/Home">
              <li>Logout</li>
            </Link>
          </div>
         
         
          </>
}
        </ul>
  
      </div>
    </nav>
  );
}

export default Nav;

// <nav>
//   <h1 className="logo">YouLearn</h1>
//   <div>
//     <ul className="nav-links">
// <div className="div-nav">
//   <Link style={navStyle} to="/Login">
//     <li>Login</li>
//   </Link>
// </div>
// <div className="div-nav">
//   <Link style={navStyle} to="/Home">
//     <li>Logout</li>
//   </Link>
// </div>
// <div className="div-nav">
//   <Link style={navStyle} to="/Registration">
//     <li> SignUp</li>
//   </Link>
// </div>
// <div className="div-nav">
//   <Link style={navStyle} to="/Imprint">
//     <li>Imprint</li>
//   </Link>
// </div>
// <div className="div-nav">
//   <Link style={navStyle} to="/About">
//     <li>About</li>
//   </Link>
// </div>
//     </ul>
//   </div>

// </nav>
