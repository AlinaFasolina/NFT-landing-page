import React from "react";
import Introduction from "../../Components/Introduction/Introduction";
import Layout from "../../Components/Layout/Layout";
import ReleasePlan from "../../Components/ReleasePlan/ReleasePlan";

const Home = () => {
  return (
    <Layout buttonText="WHITELIST NOW!">
      <Introduction />
      <ReleasePlan />
    </Layout>
  );
};

export default Home;
