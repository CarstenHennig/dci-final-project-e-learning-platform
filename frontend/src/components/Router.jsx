import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav.jsx";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
import Imprint from "./Imprint.jsx";
import About from "./About.jsx";
import Article from "./Article.jsx";
import PostPodcast from "./Podcast.jsx";
import Footer from "./Footer.jsx";
import { UserContext } from "./InfoProvider.jsx";
import Home from "./Home.jsx";
import EditProfilePage from "./EditProfilePage.jsx";
import UserProfile from "./UserProfile.jsx";
import EmbeddedMedia from "./EmbeddedMedia.js";

export default function RouterComponents() {
  const [isLog, setIsLog] = useContext(UserContext);
  console.log(isLog);
  return (
    <Router>
      <div>
        <Nav user={isLog} />
        <main className="main">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/Registration" component={Registration} />
            <Route path="/Imprint" component={Imprint} />
            <Route path="/About" component={About} />
            <Route path="/Article" component={Article} />
            {isLog ? (
              <Route path="/UserProfile" component={UserProfile} />
            ) : null}
            {isLog ? <Route path="/EmbeddedMedia" component={EmbeddedMedia} /> : null}
            {isLog ? <Route path="/Podcast" component={PostPodcast} /> : null}
            {isLog ? <Route path="/Home" component={Home} /> : null}
            <Route path="/EditProfilePage" component={EditProfilePage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
