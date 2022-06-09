import React from "react";
import classes from "./Vision.module.css";
import bearRed from "../../Assets/Images/bear-red-bordered.png";
import bearWhite from "../../Assets/Images/bear-white-bordered.png";
import bearBlue from "../../Assets/Images/bear-blue-bordered.png";

const Vision = () => {
  return (
    <div id="vision" className={classes["vision-wrapper"]}>
      <h2 className={classes["vision-plan__title"]}>
        Teddy Bear Ape Club Vision Program
      </h2>
      <div className={classes["vision-bears"]}>
        <div>
          <img alt="bear red" src={bearRed} />
        </div>
        <div>
          <img alt="bear white" src={bearWhite} />
        </div>
        <div>
          <img alt="bear blue" src={bearBlue} />
        </div>
      </div>
      <div className={classes["vision-descrip__top"]}>
        <p className={classes["vision-descrip__text"]}>
          As a child there is no doubt you had a favourite teddy bear that you
          grew up with. It was your ultimate feeling of love and comfort which
          brought a sense of security and safety. This is the vision of the
          Teddy Bear Ape Club, where our community members not only have the
          opportunity of owning the NFT in digital format which in its own right
          will bring a feeling of belong, but also expanding the collection to
          physical form with an ambition to give away these teddy bears to
          children who are perhaps less fortunate than others.
        </p>
        <p className={classes["vision-descrip__text"]}>
          Our future plans are bright and ambitious but we believe with a strong
          community we can all stand togeather and deliver a program of
          excellence that delivers all our goals as defined below
        </p>
      </div>
      <div  className={classes["vision-descrip__bottom"]}>
        <p className={classes["vision-descrip__text"]}>
          We would be very greatful to conclude both of our goals, but this
          would not be the end for us. We will expand and grow our core
          foundation based on suggestions from the community. We believe we can
          become one of the leading NFT projects that truly made a difference.
          We are by no means a charity foundation or claim to be, but we believe
          that working outside of the norm gives us the opportunity to expand
          rapidly and grow our project to heights never seen before in this
          space!
        </p>
      </div>
    </div>
  );
};

export default Vision;
