import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav.jsx";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
import Imprint from "./Imprint.jsx";
import About from "./About.jsx";
import Article from "./Article.jsx";
import Footer from "./Footer.jsx";
import Logout from "./Logout.jsx";
import { UserContext } from "./InfoProvider.jsx";
import Home from "./Home.jsx";

import UserProfile from './UserProfile.jsx';
function RouterComponents() {
  const [user, setUser] = useState(false);
  const [isLog, setIsLog] = useContext(UserContext);
  return (
    <Router>
      <div>
        <Nav user={isLog} />
        <main className="main">
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Registration" component={Registration} />
            <Route path="/Imprint" component={Imprint} />
            <Route path="/About" component={About} />
            <Route path="/Article" component={Article} />
            <Route path="/Logout" component={Logout} />
            <Route path="/Home" component={Home} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );

}

export default RouterComponents;
