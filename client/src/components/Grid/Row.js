import React from "react";

export var Row = ({ fluid, children }) =>
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;
