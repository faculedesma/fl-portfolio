import React from "react";

const BlackPage = () => {
  return (
    <div
      id="black-page"
      style={{
        display: "none",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100vw",
        backgroundColor: "black",
        zIndex: 99,
      }}
    ></div>
  );
};

export default BlackPage;
