import "./Registration.css";

function Registration() {
  return (
    <div className="registration">
      <h1> Let's start to LearnUp together: </h1>

      <div className="wrap">
        <form action="/action_page.php">
          <div>
            <label for="fname">First Name : </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name..."
            />
          </div>
          <div>
            <label for="lname">Last Name : </label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name..."
            />
          </div>
          <div>
            <label for="lname">Your Email : </label>
            <input type="email" id="email" size="30" required></input>
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
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
