import React from "react";
import Layout from "../../Components/Layout/Layout";
import Minting from "../../Components/Minting/Minting";
import OnePhase from "../../Components/OnePhase/OnePhase";
import { secondPhaseInfoList } from "../../Helpers/consts";
import classes from "./SecondPhase.module.css";

const SecondPhase = () => {
  return (
    <Layout buttonText="MINT YOUR TBAC NFT NOW">
      <div className={classes["second-phase-wrapper"]}>
        <div className={classes["second-phase-left"]}>
          <OnePhase
            title="Phase 2 -> 3000 TBAC Public Mint Release"
            infoList={secondPhaseInfoList}
          />
        </div>
        <div className={classes["second-phase-right"]}>
          <Minting />
        </div>
      </div>
    </Layout>
  );
};

export default SecondPhase;
