import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes["footer-wrapper"]}>
      <div>
        <p className={classes["footer-copyright"]}>
          Copyright 2022, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
