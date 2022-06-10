import React from "react";
import { scrollTo } from "../../Helpers/scrollTo";

const ScrollToButton = ({ toId, toRef, duration, children, closeHamburger }) => {
  const clickHandler = () => {
    scrollTo({ id: toId, ref: toRef, duration });
    closeHamburger();
  }

  return <button onClick={clickHandler}>{children}</button>;
};

export default ScrollToButton;
