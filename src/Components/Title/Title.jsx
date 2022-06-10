import React from "react";
import classes from "./Title.module.css";

const Title = ({ text }) => {
  return <h2 className={classes["h2-title"]}>{text}</h2>;
};

export default Title;
