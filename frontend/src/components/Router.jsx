import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav.jsx";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
import Imprint from "./Imprint.jsx";
import About from "./About.jsx";
<<<<<<< HEAD
import Article from "./Article.jsx";
=======
import WriteArticle from "./Article.jsx";
>>>>>>> 523b6102baf51ab9b61a4b81ef37bff8ae9822f6
import PostVideo from "./Video.jsx";
import Footer from "./Footer.jsx";
import { UserContext } from "./InfoProvider.jsx";
import Home from "./Home.jsx";
import EditProfilePage from "./EditProfilePage.jsx";

import UserProfile from "./UserProfile.jsx";
function RouterComponents() {
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
            <Route path="/Logout" component={Logout} />
            <Route path="/Article" component={WriteArticle} />
            <Route path="/Video" component={PostVideo} />
            <Route path="/UserProfile" component={UserProfile} />
            {isLog ? <Route path="/Home" component={Home} /> : null}
            <Route path="/EditProfilePage" component={EditProfilePage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default RouterComponents;
