import React from "react";
import classes from "./ReleasePlanItem.module.css";

const ReleasePlanItem = ({ number, text }) => {
  return (
    <div className={classes["release-plan-item"]}>
      <p className={classes["release-plan-item__number"]}>{number}</p>
      <p className={classes["release-plan-item__text"]}>{text}</p>
    </div>
  );
};

export default ReleasePlanItem;
