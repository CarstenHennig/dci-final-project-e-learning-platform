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
      <div>
      <h1>Task of the day</h1>
      <button onClick={togglePopUp} className="button-welcome-popup">
      Are you ready?
      </button>
      {isOpen ? <WelcomePopUp handleClose={togglePopUp} /> : null}
      </div>
    </div>
  );
}
