import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/Login">
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/Logout">
          <li>Logout</li>
        </Link>
        <Link style={navStyle} to="/Home">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
