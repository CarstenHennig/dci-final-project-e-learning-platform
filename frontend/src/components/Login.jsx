import "./Login.css";
import React, { useState , useContext} from "react";
import {UserContext} from "./InfoProvider.jsx"
import axios from "axios";
import { Link,useHistory } from "react-router-dom";


function Login(props) {

const history = useHistory()

  const [login, setLogin] = useState({});
  const [isLog, setIsLog]= useContext(UserContext)
  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("come from Login", login);
    return await axios
      .post("http://localhost:9000/users/login", login)
      .then((result) => {
        console.log('hello',result.data);
         if(result.data.token){
           setIsLog({...isLog, isLog:true, user: result.data.user})
          history.push('/Home')
         }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <div className="login-container">
        <form onSubmit={submitHandler}>
          <div>
            <label for="email">Email :</label>
            <input
              onChange={changeHandler}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div>
            <label for="pass">Password :</label>
            <input
              onChange={changeHandler}
              type="password"
              id="pass"
              name="password"
              placeholder="8 characters minimum"
              minLength="8"
              required
            />
          </div>

          <input className="sign-in-submit" type="submit" value="Sign in" />
          <h4><Link className="sign-up-submit" to="/Registration"> Sign Up</Link> </h4>
          {/* <input className="sign-up-submit" type="submit" value="Sign Up"  /> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
