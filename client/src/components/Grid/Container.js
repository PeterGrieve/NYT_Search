import React from "react";

export var Container = ({ fluid, children }) =>
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;
