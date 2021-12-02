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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          architecto eius aut ipsa, temporibus iusto quod. Itaque vel qui fuga.
          Dolore deserunt incidunt, dolorem impedit deleniti consequuntur facere
          modi quos.
        </div>
        {/* {props.content} */}
      </div>
    </div>
  );
};

export default Popup;
