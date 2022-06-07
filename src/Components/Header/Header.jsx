import React, { useState } from "react";
import CommonButton from "../Buttons/CommonButton/CommonButton";
import Navigation from "../Navigation/Navigation";
import classes from "./Header.module.css";
import logo from "../../Assets/Images/logo.svg";
import { NavLink } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

const Header = ({buttonText}) => {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);
  const toggleHamburger = () => {
    setIsHamburgerOpened((prev) => !prev);
  };

  return (
    <div className={classes["header-wrapper"]}>
      <div className={isHamburgerOpened ? classes["navigation-mob"] :classes["navigation-mob"] + " " + classes["navigation-mob__hidden"]}>
        <Navigation />
      </div>
      <div className={classes["header-left"]}>
        <Hamburger isHamburgerOpened={isHamburgerOpened} toggleHamburger={toggleHamburger} />
        <NavLink className={classes["header-logo"]} to="/">
          <img alt="logo" src={logo} />
        </NavLink>
        <div className={classes["navigation-desktop"]}>
          <Navigation />
        </div>
      </div>
      <div className={classes["header-right"]}>
        <CommonButton text={buttonText} />
      </div>
    </div>
  );
};

export default Header;
