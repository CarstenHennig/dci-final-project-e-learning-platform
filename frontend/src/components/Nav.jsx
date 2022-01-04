import "./Nav.css";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "./InfoProvider.jsx";
import Logo from "../images/Logo01.png";

export default function Nav(props) {
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
      <div className="logo">
        <img src={Logo} />
      </div>

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
                <Link
                  onClick={logOutHandler}
                  style={navStyle}
                  className="nav-link"
                  to="#"
                >
                  Logout
                </Link>
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

              <li className="nav-item">
                <Link className="nav-link" style={navStyle} to="/Video">
                  <li>Post video</li>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" style={navStyle} to="/EmbeddedMedia">
                  Video gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={navStyle} to="/Podcast">
                  <li>Post podcast</li>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" style={navStyle} to="/Home">
                  <li>Home</li>
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
