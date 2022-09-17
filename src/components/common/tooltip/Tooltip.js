import React from "react";
import "./tooltip.scss";

const Tooltip = ({ information, close = false, closeTooltip }) => {
  return (
    <div className="tooltip">
      <div className="tooltip-content">
        {information.generic && (
          <div className="tooltip-generic">{information.generic}</div>
        )}
        {information.personal && (
          <div className="tooltip-personal">{information.personal}</div>
        )}
      </div>
      {close && (
        <div className="tooltip-close" onClick={closeTooltip}>
          X
        </div>
      )}
    </div>
  );
};

export default Tooltip;
