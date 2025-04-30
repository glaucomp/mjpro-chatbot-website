import Lottie from "lottie-react";
import React from "react";
import centerIcon from "../assets/icons/icon-mjlogo.svg";
import animationData from "../assets/lottie/lottie-abstract.json";
import "./LottieCentered.css";

export default function LottieCentered() {
  return (
    <div className="lottie-wrapper">
      <div className="lottie-container">
        <Lottie animationData={animationData} loop={true} />
        <img src={centerIcon} alt="Center Icon" className="center-icon" />
      </div>
    </div>
  );
}
