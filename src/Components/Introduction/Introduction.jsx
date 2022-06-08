import React from "react";
import GradientButton from "../Buttons/GradientButton/GradientButton";
import classes from "./Introduction.module.css";
import bear from '../../Assets/Images/teddy-bear.gif';

const Introduction = () => {
  return (
    <div className={classes["introduction-wrapper"]}>
      <div className={classes["introduction__left"]}>
        <h1 className={classes["introduction__title"]}>
          {/* <p>Discover Addorable</p>
          <p>Cute And Cuddly</p> */}
          <p>Teddy Bear Ape Club - 10,000 Teddy NFT Collection</p>
        </h1>
        <p className={classes["introduction__descrip"]}>
          Teddy Bear Ape Club (TBAC) is a collection of 10,000 Unique NFT’s with
          proof of ownership stored on the Ethereum blockchain that are not only
          cute and cuddly, but here to spread positivity, love and most of all a
          feeling of belonging to something much bigger than just an average NFT
          community!
        </p>
        <GradientButton lg text="Whitelist"/>
      </div>
      <div className={classes["introduction__right"]}>
       <img className="bear__img" alt="bear" src={bear}/>
      </div>
    </div>
  );
};

export default Introduction;
