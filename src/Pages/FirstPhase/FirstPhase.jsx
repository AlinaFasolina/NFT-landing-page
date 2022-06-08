import React from "react";
import Layout from "../../Components/Layout/Layout";
import OnePhase from "../../Components/OnePhase/OnePhase";
import { firstPhaseInfoList } from "../../Helpers/consts";
import classes from "./FirstPhase.module.css";
import bear from "../../Assets/Images/teddy-bear.gif";

const FirstPhase = () => {
  return (
    <Layout buttonText="MINT YOUR TBAC NFT NOW">
      <div className={classes["first-phase-wrapper"]}>
        <div className={classes["first-phase-left"]}>
          <OnePhase
            title="Phase 1 -> First 1500 TBAC FREE Mint Release Cycle"
            infoList={firstPhaseInfoList}
          />
        </div>
        <div>
          <img className="bear__img" alt="bear" src={bear} />
        </div>
      </div>
    </Layout>
  );
};

export default FirstPhase;
