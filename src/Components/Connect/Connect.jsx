import React from "react";
import ConnectButton from "../Buttons/ConnectButton/ConnectButton";
import classes from "./Connect.module.css";
import discord from "../../Assets/Images/discord.png";
import twitter from "../../Assets/Images/twitter.png";
import Title from "../Title/Title";

const Connect = () => {
  return (
    <div className={classes["connect-wrapper"]}>
      <Title text="Connect with us" />
      <div className={classes["connect__butons"]}>
        <ConnectButton img={twitter} textTop="Twitter" link="https://twitter.com/tbacnft"/>
        <ConnectButton
          img={discord}
          textTop="Discord"
          textBottom="(coming soon)"
        />
      </div>
      <a className={classes["connect__email"]} href="mailto:hello@tbac.app">
        hello@tbac.app
      </a>
    </div>
  );
};

export default Connect;
