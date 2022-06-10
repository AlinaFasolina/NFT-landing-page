import React from "react";
import classes from "./ConnectButton.module.css";
import {goToOuterLink} from "../../../Helpers/utils"

const ConnectButton = ({ img, textTop, textBottom, link }) => {
  return (
    <button onClick={()=>goToOuterLink(link)} className={classes["connect-btn"]}>
      <img className={classes["connect-btn__img"]} src={img} alt="" />
      <div>
        <p className={classes["connect-btn__text-top"]}>{textTop}</p>
        <p className={classes["connect-btn__text-bottom"]}>{textBottom}</p>
      </div>
    </button>
  );
};

export default ConnectButton;
