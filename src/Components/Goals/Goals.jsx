import React from "react";
import classes from "./Goals.module.css";
import { goalsList } from "../../Helpers/consts";
import GoalsItem from "./GoalsItem/GoalsItem";

const Goals = () => {
  return (
    <div className={classes.goals}>
      {goalsList.map((item, index) => (
        <GoalsItem key={index} index={index} title={item.title} goals={item.goals} />
      ))}
    </div>
  );
};

export default Goals;
