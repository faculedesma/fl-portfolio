import React from "react";
import "./tooltip.scss";

const Tooltip = ({ information, top, bottom, left, right, maxHeight }) => {
  return (
    <div className="tooltip" style={{ top, bottom, left, right }}>
      <div
        className="tooltip-content"
        style={{ maxHeight: maxHeight || "250px" }}
      >
        {information.generic && (
          <p className="tooltip-generic">{information.generic}</p>
        )}
        {information.personal && (
          <p className="tooltip-personal">{information.personal}</p>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
