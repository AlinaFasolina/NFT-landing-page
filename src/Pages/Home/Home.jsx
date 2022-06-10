import React from "react";
import Connect from "../../Components/Connect/Connect";
import Footer from "../../Components/Footer/Footer";
import Introduction from "../../Components/Introduction/Introduction";
import Layout from "../../Components/Layout/Layout";
import ReleasePlan from "../../Components/ReleasePlan/ReleasePlan";
import Team from "../../Components/Team/Team";
import Vision from "../../Components/Vision/Vision";

const Home = () => {
  return (
    <Layout buttonText="WHITELIST NOW!">
      <Introduction />
      <ReleasePlan />
      <Vision />
      <Team />
      <Connect />
      <Footer />
    </Layout>
  );
};

export default Home;
