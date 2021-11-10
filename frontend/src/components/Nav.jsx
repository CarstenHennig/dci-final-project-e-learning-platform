import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h1>LernUp</h1>
      <ul className="nav-links">
        <Link style={navStyle} to="/Login">
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/Home">
          <li>Logout</li>
        </Link>
        <Link style={navStyle} to="/Registration">
          <li>Registration</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
