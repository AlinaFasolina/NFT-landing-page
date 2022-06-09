import React from "react";
import classes from "./Team.module.css";
import { teamMembersList } from "../../Helpers/consts";
import TeamMember from "./TeamMember/TeamMember";

const Team = () => {
  return (
    <div id="team" className={classes["team__wrapper"]}>
      <h2 className={classes["team__title"]}>Allow us to Bear Ourselves</h2>
      <div className={classes["team-items__wrapper"]}>
        {teamMembersList.map((item) => (
          <TeamMember
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
