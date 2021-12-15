import React, { useState } from "react";
import "./Welcome.css";
import WelcomePopUp from "./WelcomePopUp.jsx";

export default function WelcomeText() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Home-welcome">
      <h1>Task of the day</h1>
      <h1>YouLearn || NoLearn</h1>
      <h4>set StartToday = (i) => i.login </h4>
      <button onClick={togglePopUp} className="button-welcome-popup">
        Sure, but why?
      </button>
      {isOpen ? <WelcomePopUp handleClose={togglePopUp} /> : null}
    </div>
  );
}
