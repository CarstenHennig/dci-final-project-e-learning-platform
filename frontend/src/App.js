import "./App.css";
import React from "react";
import Nav from "./components/Nav.jsx";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
