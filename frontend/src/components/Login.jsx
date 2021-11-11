import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div>
          <label for="username">Username :</label>
          <input type="text" id="username" name="username" />
        </div>

        <div>
          <label for="pass">Password :</label>
          <input
            type="password"
            id="pass"
            name="password"
            placeholder="8 characters minimum"
            minlength="8"
            required
          />
        </div>

        <input className="sign-in-submit" type="submit" value="Sign in"></input>
      </div>
    </div>
  );
}

export default Login;
