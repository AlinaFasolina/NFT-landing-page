import React from "react";
import classes from "./OnePhaseItem.module.css";

const OnePhaseItem = ({ number, text }) => {
  return (
    <div className={classes["one-phase-item"]}>
      <p className={classes["one-phase-item__number"]}>{number}</p>
      <p className={classes["one-phase-item__text"]}>{text}</p>
    </div>
  );
};

export default OnePhaseItem;
