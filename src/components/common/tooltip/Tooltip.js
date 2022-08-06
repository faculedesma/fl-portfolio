import React from "react";
import "./tooltip.scss";

const Tooltip = ({ content, top, bottom, left, right }) => {
  return (
    <div className="tooltip" style={{ top, bottom, left, right }}>
      <div className="tooltip-content">{content}</div>
    </div>
  );
};

export default Tooltip;
