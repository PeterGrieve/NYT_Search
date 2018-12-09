import React from "react";

export var TextArea = props =>
  <div className="form-group">
    <textarea className="form-control" rows="20" {...props} />
  </div>;
