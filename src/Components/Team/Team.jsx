import React from "react";
import classes from "./Team.module.css";
import { teamMembersList } from "../../Helpers/consts";
import TeamMember from "./TeamMember/TeamMember";
import Title from "../Title/Title";

const Team = () => {
  return (
    <div id="team" className={classes["team__wrapper"]}>
      <Title text="Allow us to Bear Ourselves" />
      <div className={classes["team-items__wrapper"]}>
        {teamMembersList.map((item, index) => (
          <TeamMember
            key={index}
            name={item.name}
            imgSrc={item.imgSrc}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
