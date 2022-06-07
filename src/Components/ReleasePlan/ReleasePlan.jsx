import React from "react";
import classes from "./ReleasePlan.module.css";
import ReleasePlanBlock from "./ReleasePlanBlock/ReleasePlanBlock";
import {releasePlanList} from "../../Helpers/consts";

const ReleasePlan = () => {
  return (
    <div className={classes["release-plan__wrapper"]}>
      <h2 className={classes["release-plan__title"]}>
        Teddy Bear Ape Club Release Plan
      </h2>
      <div className={classes["release-plan__blocks"]}>
        {releasePlanList.map((item, index)=> <ReleasePlanBlock key={index} data={item}/>)}
      </div>
    </div>
  );
};

export default ReleasePlan;
