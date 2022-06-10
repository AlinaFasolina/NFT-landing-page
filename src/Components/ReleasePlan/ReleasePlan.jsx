import React from "react";
import classes from "./ReleasePlan.module.css";
import ReleasePlanBlock from "./ReleasePlanBlock/ReleasePlanBlock";
import {releasePlanList} from "../../Helpers/consts";
import Title from "../Title/Title";

const ReleasePlan = () => {
  return (
    <div id="release" className={classes["release-plan__wrapper"]}>
      <Title text="Teddy Bear Ape Club Release Plan"/>
      <div className={classes["release-plan__blocks"]}>
        {releasePlanList.map((item, index)=> <ReleasePlanBlock key={index} data={item}/>)}
      </div>
    </div>
  );
};

export default ReleasePlan;
