import React from "react";
import classes from "./GradientButton.module.css";

const GradientButton = ({text}) => {
  return (
    <button className={classes["gradient-btn"]}>
      {text}
    </button>
  );
};

export default GradientButton;
