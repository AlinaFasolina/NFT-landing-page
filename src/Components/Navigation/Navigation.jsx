import React from "react";
import { NavLink } from "react-router-dom";
import ScrollToButton from "../ScrollToButton/ScrollToButton";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={classes.navigation}>
      <li>
        <NavLink className={classes.active} to="#">
          Home
        </NavLink>
      </li>
      <li>
        <ScrollToButton toId="release">Release Plan</ScrollToButton>
      </li>
      <li>
        <ScrollToButton toId="vision">The Vision</ScrollToButton>
      </li>
      <li>
        <ScrollToButton toId="team">Team</ScrollToButton>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/tbacnft">
          Twitter
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
