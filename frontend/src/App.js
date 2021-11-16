import "./App.css";
import React, {useState} from "react";
import Nav from "./components/Nav.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Registration from "./components/Registration.jsx";
import Imprint from "./components/Imprint.jsx";
import About from "./components/About.jsx";
import {  Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
 
function App() {
  const [user, setUser] = useState(false);
  // if (user === null){
  //   return <div> 
  //           <Router>
  //           <Nav />
  //           <Route path="/Login"  component={Login} />
  //           <Switch>
  //             <Route path="/Imprint" component={Imprint} />
  //             <Route path="/About" component={About} />
  //           </Switch>
  //           </Router>
  //         </div> }

    return (
      <Router>
        <div>
          <Nav user= {user} />
          <main className="main">

            <Switch>
              {!user ? <> 
              
              
              <Route path="/Login"  component={Login} /> 
              <Route path="/Registration" component={Registration} />
              <Route path="/Imprint" component={Imprint} />
              <Route path="/About" component={About} />
              </>: <>
              {/* <Route path="/" exact component={Home} />
              <Route path="/Home" component={Home} /> */}
              {/* <Route path="/Login" component={Login} /> */}
            
              </>
              }

            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  
}

export default App;
