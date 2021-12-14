import React from "react";
import "./WelcomePopUp.css";
// import logo from "./images/You-Learn.png";

const WelcomePopUp = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div>
          {/* <img
            src={logo}
            alt="YouLearn e-learning platform for students and alumni of DCI"
          /> */}
          <h3>What is YouLearn?</h3>
          <p>
            YouLearn is the e-learning platform for students and alumni of
            Digital Career Institute (DCI), Germany.
          </p>
          <p>
            YouLearn is an open source project to improve all skills of DCI
            studies, i.e. web development, cloud computing and online marketing.
          </p>
          <hr />
          <h3>Why I should join YouLearn</h3>
          <p>
            Share your thoughts, tasks and project ideas as blog posts, video
            tutorials and podcasts.
          </p>
          <p>
            Join YouLearn on the{" "}
            <a
              href="https://github.com/CarstenHennig/dci-final-project-e-learning-platform"
              target="_blank"
            >
              GitHub repository
            </a>{" "}
            to develop new functions, improve the code, add API and do other dev
            stuff.
          </p>
          <hr />
          <h3>For sure, but what is my benefit?</h3>
          <p>
            YouLearn is a peer-to-peer e-learning platform. You'll benefit from
            the input of all other community members.
          </p>
          <hr />
          <h3>Contact us to become a YouLearn developer</h3>
          <p>
            Fill this{" "}
            <a href="https://bgyimel9j0r.typeform.com/to/lzTnrfXd">typeform</a>.
            We will contact you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopUp;
