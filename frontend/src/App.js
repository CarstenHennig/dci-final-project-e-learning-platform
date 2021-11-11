import "./App.css";
import React from "react";
import Nav from "./components/Nav.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Registration from "./components/Registration.jsx";
import Imprint from "./components/Imprint.jsx";
import About from "./components/About.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <main className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Registration" component={Registration} />
            <Route path="/Imprint" component={Imprint} />
            <Route path="/About" component={About} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
