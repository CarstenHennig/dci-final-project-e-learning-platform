import "./Login.css";
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [login, setLogin] = useState({});

  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("come from Login", login);
    return await axios
      .post("http://localhost:9000/login", login)
      .then((result) => console.log(result.data))
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
              minlength="8"
              required
            />
          </div>

          <input className="sign-in-submit" type="submit" value="Sign in" />
        </form>
      </div>
    </div>
  );
}

export default Login;
