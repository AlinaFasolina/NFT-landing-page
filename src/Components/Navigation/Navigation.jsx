import React from "react";
import { NavLink } from "react-router-dom";
import ScrollToButton from "../ScrollToButton/ScrollToButton";

import classes from "./Navigation.module.css";

const Navigation = ({ closeHamburger }) => {
  return (
    <ul className={classes.navigation}>
      <li>
        <NavLink className={classes.active} to="#">
          Home
        </NavLink>
      </li>
      <li>
        <ScrollToButton closeHamburger={closeHamburger} toId="release">
          Release Plan
        </ScrollToButton>
      </li>
      <li>
        <ScrollToButton closeHamburger={closeHamburger} toId="vision">
          The Vision
        </ScrollToButton>
      </li>
      <li>
        <ScrollToButton closeHamburger={closeHamburger} toId="team">
          Team
        </ScrollToButton>
      </li>
      <li onClick={closeHamburger}>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/tbacnft">
          Twitter
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
