import React from "react";
import ReleasePlanItem from "../ReleasePlanItem/ReleasePlanItem";
import classes from "./ReleasePlanBlock.module.css";

const ReleasePlanBlock = ({data}) => {
  return (
    <div className={classes["release-plan-block"]}>
        {data.map((item, index)=><ReleasePlanItem key={index} number={item.number} text={item.text}/>)}
    </div>
  );
};

export default ReleasePlanBlock;
