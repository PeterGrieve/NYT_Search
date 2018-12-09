import React from "react";

export var FormBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-primary">
    {props.children}
  </button>;
