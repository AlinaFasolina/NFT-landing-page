import React from "react";
import classes from "./CommonButton.module.css";

const CommonButton = ({text}) => {
  return (
    <button className={classes["common-btn"]}>
      {text}
    </button>
  );
};

export default CommonButton;
