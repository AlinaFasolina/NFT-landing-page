import React from "react";
import classes from "./GoalsItem.module.css";

const GoalsItem = ({ index, title, goals }) => {
  return (
    <div className={classes["goals-item"]}>
      <div className={classes["goals-item__top"]}>
        <p className={classes["goals-item__number"]}>{index + 1}</p>
        <h3 className={classes["goals-item__title"]}>{title}</h3>
      </div>
      <ul className={classes["goals-item__goals-list"]}>
        {goals.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsItem;
