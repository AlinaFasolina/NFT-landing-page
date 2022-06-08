import React from "react";
import classes from "./GradientButton.module.css";

const GradientButton = ({text, lg}) => {
  return (
    <button className={lg ? classes["gradient-btn"] + " " + classes["lg"] : classes["gradient-btn"]}>
      {text}
    </button>
  );
};

export default GradientButton;
