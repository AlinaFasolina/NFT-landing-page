import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={classes.navigation}>
      <li>
        <NavLink className={classes.active} to="#">Home</NavLink>
      </li>
      <li>
        <NavLink to="#">Roadmap</NavLink>
      </li>
      <li>
        <NavLink to="#">Whitelist</NavLink>
      </li>
      <li>
        <NavLink to="#">Twitter</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
