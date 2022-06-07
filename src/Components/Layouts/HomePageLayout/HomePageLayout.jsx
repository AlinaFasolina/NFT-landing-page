import React from "react";
import Header from "../../Header/Header";

const HomePageLayout = (props) => {
  const { children, buttonText } = props;
  return (
    <div>
      <Header buttonText={buttonText} />
      <div>{children}</div>
    </div>
  );
};

export default HomePageLayout;
