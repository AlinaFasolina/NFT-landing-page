import React from "react";
import classes from "./CommonButton.module.css";
import {goToOuterLink} from "../../../Helpers/utils"

const CommonButton = ({text, link}) => {
  return (
    <button onClick={()=>goToOuterLink(link)} className={classes["common-btn"]}>
      {text}
    </button>
  );
};

export default CommonButton;
