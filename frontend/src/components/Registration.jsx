import "./Registration.css";
import React, { useState } from "react";
import axios from "axios";

function Registration() {
  const [register, setRegister] = useState({});

  const changeHandler = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (register.password == register.repassword) {
      return await axios
        .post("http://localhost:9000/register", register)
        .then((result) => console.log(result.data))
        .catch((error) => console.log(error));
    }
    alert("your password unmatched");
  };
  return (
    <div className="registration">
      <h1> Create account and start to learn : </h1>

      <div className="wrap">
        <form onSubmit={submitHandler}>
          <div>
            <label for="fname">First Name : </label>
            <input
              onChange={changeHandler}
              type="text"
              id="fname"
              name="firstName"
              placeholder="Your name..."
            />
          </div>
          <div>
            <label for="lname">Last Name : </label>
            <input
              onChange={changeHandler}
              type="text"
              id="lname"
              name="lastName"
              placeholder="Your last name..."
            />
          </div>
          <div>
            <label for="lname">Your Email : </label>
            <input
              onChange={changeHandler}
              type="email"
              id="email"
              name="email"
              size="30"
              required
            ></input>
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
          <div>
            <label for="pass">Repeat Password :</label>
            <input
              onChange={changeHandler}
              type="password"
              id="pass"
              name="repassword"
              placeholder="8 characters minimum"
              minlength="8"
              required
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
