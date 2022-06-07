import React from "react";
import HomePageLayout from "../../Components/Layouts/HomePageLayout/HomePageLayout";
import OnePhase from "../../Components/OnePhase/OnePhase";
import { firstPhaseInfoList } from "../../Helpers/consts";
import classes from "./FirstPhase.module.css";
import bear from "../../Assets/Images/teddy-bear.png";

const FirstPhase = () => {
  return (
    <HomePageLayout buttonText="MINT YOUR TBAC NFT NOW">
      <div className={classes["first-phase-wrapper"]}>
        <div className={classes["first-phase-left"]}>
          <OnePhase
            title="Phase 1 -> First 1500 TBAC FREE Mint Release Cycle"
            infoList={firstPhaseInfoList}
          />
        </div>
        <div>
          <img className={"bear__img" + " " + classes['first-phase-img']} alt="bear" src={bear} />
        </div>
      </div>
    </HomePageLayout>
  );
};

export default FirstPhase;
