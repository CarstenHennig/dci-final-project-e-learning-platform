import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "./InfoProvider.jsx";

function Nav(props) {
  const navStyle = {
    color: "white",
  };
  const [isLog, setIsLog] = useContext(UserContext);
  const history = useHistory();
  const logOutHandler = (e) => {
    setIsLog(false);
    history.push("/Login");
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
          {!props.user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" style={navStyle} to="/Login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" style={navStyle} to="/Registration">
                  SignUp
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <button onClick={logOutHandler} className="nav-link">
                  Logout
                </button>
              </li>

              <li className="nav-item">
            <Link className="nav-link" style={navStyle} to="/UserProfile">
              Profile
            </Link>
            </li>

              <li className="nav-item">
                <Link className="nav-link" style={navStyle} to="/Article">
                  <li>Post article</li>
                </Link>
              </li>
            </>
          )}
          
          <li className="nav-item">
            <Link className="nav-link" style={navStyle} to="/Imprint">
              Imprint
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" style={navStyle} to="/About">
              About
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Nav;