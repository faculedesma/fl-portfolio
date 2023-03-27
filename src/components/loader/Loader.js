import React, { useRef } from "react";
import { IoInfinite } from "react-icons/io5";
import "./loader.scss";

const Loader = ({ isLoading, onContinue }) => {
  const loaderRef = useRef();

  const handleEnterRoom = () => {
    if (loaderRef.current) {
      loaderRef.current.classList.add("hide-loader");
      loaderRef.current.classList.remove("complete");
    }
    onContinue();
  };
  return (
    <div
      ref={loaderRef}
      className={`initial-loader ${isLoading ? "loop-loading" : "complete"}`}
    >
      <div className="initial-loader--bg">
        <div className="initial-loader--bg-left"></div>
        <div className="initial-loader--bg-right"></div>
      </div>
      {isLoading ? (
        <div className="initial-loader--center">
          <p>Who are you?</p>
          <IoInfinite />
          <div className="initial-loader--center-circle"></div>
        </div>
      ) : (
        <div className="initial-loader--cta">
          <button onClickCapture={handleEnterRoom}>Enter the void</button>
        </div>
      )}
    </div>
  );
};

export default Loader;
