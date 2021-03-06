import React from "react";
import { HashRouter } from "react-router-dom";

export const MainAppHOC = (Component) => (props) => {
  return (
    <HashRouter>
      <Component {...props} />
    </HashRouter>
  );
};
