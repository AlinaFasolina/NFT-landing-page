import React from "react";
import classes from "./TeamMember.module.css";

const TeamMember = ({imgSrc, name, position}) => {
  return (
    <div className={classes["team-member"]}>
      <img className={classes["team-member__img"]} alt="bear orange t-shirt" src={imgSrc}/>
      <div className={classes["team-member__information"]}>
        <p className={classes["team-member__name"]}>{name}</p>
        <p className={classes["team-member__position"]}>{position}</p>
      </div>
    </div>
  );
};

export default TeamMember;
