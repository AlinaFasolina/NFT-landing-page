import React from "react";
import GradientButton from "../Buttons/GradientButton/GradientButton";
import OnePhaseItem from "./OnePhaseItem/OnePhaseItem";
import classes from "./OnePhase.module.css";

const OnePhase = ({ title, infoList }) => {
  return (
    <div className={classes["one-phase-wrapper"]}>
      <h1 className={classes["one-phase-title"]}>{title}</h1>
      <div className={classes["one-phase-info"]}>
        {infoList.map((item, index) => (
          <OnePhaseItem key={index} number={index + 1} text={item} />
        ))}
      </div>
      <GradientButton text="MINT YOUR TBAC" />
    </div>
  );
};

export default OnePhase;
