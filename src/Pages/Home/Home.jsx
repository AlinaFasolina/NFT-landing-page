import React from "react";
import Introduction from "../../Components/Introduction/Introduction";
import HomePageLayout from "../../Components/Layouts/HomePageLayout/HomePageLayout";
import ReleasePlan from "../../Components/ReleasePlan/ReleasePlan";

const Home = () => {
  return (
    <HomePageLayout buttonText="WHITELIST NOW!">
      <Introduction />
      <ReleasePlan />
    </HomePageLayout>
  );
};

export default Home;
