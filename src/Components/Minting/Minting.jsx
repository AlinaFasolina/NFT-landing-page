import React, { useState } from "react";
import GradientButton from "../Buttons/GradientButton/GradientButton";
import classes from "./Minting.module.css";

const Minting = () => {
  const [limit, setLimit] = useState(3);

  const handleLimit = (type) => {
    if (type === "plus") {
      if (limit + 1 <= 5) {
        setLimit(limit + 1);
      }
    } else {
      if (limit - 1 !== 0) {
        setLimit(limit - 1);
      }
    }
  };
  return (
    <div className={classes.minting}>
      <div className={classes["minting-title"]}>
        <p>TBAC Minting </p>
        <p>
          <span>0</span>/<span className={classes["minting-purple"]}>3000</span>
        </p>
      </div>
      <div className={classes["minting-counter"]}>
        <div
          className={classes["minting-counter__handler"]}
          onClick={() => handleLimit("minus")}
          disabled={limit - 1 === 0}
        >
          -
        </div>

        <input
          className={classes["minting-counter__number"]}
          disabled
          value={limit}
        />
        <div
          className={classes["minting-counter__handler"]}
          onClick={() => handleLimit("plus")}
          disabled={limit + 1 > 20}
        >
          +
        </div>
      </div>
      <p className={classes["minting-max"]}>Maximum of 5 per wallet</p>
      <div className={classes["minting-info"]}>
        <div className={classes["minting-info__item"]}>
          <p className={classes["minting-info__item-top"]}>3 x 0.02 ETH</p>
          <p className={classes["minting-info__item-bottom"]}>
            Excluding Gas Fees
          </p>
        </div>
        <div className={classes["minting-info__item"]}>
          <p className={classes["minting-info__item-top"]}>0.06 ETH</p>
          <p className={classes["minting-info__item-bottom"]}>Price</p>
        </div>
      </div>
      <GradientButton text="MINT TBAC NOW"/>
    </div>
  );
};

export default Minting;
