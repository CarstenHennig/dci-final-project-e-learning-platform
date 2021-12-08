import React from "react";
import "./HelpPopUp.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div>
          <h3>Add a catchy headline</h3>
          <p>Not more than 5 - 7 words</p>
          <hr />
          <h3>Add short but complete description</h3>
          <p>This information are important:</p>
          <ul>
            <li>WHAT</li>
            <li>WHO</li>
            <li>WHY</li>
            <li>HOW TO</li>
          </ul>
          <hr />
          <h3>Add the complete URL</h3>
          <p>I.e. https://www.vimeo.com/pathtovideo</p>
        </div>
        {/* {props.content} */}
      </div>
    </div>
  );
};

export default Popup;
