import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import classes from "./Navigation.module.css";

const Navigation = ({ closeHamburger }) => {
  return (
    <ul className={classes.navigation}>
      <li>
        <NavLink className={classes.active} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <Link onClick={closeHamburger} smooth to="/#release">Release Plan</Link>
      </li>
      <li>
        <Link onClick={closeHamburger} smooth to="/#vision">The Vision</Link>
      </li>
      <li>
        <Link onClick={closeHamburger} smooth to="/#team">Team</Link>
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
