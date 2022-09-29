import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { BsFillDoorOpenFill } from "react-icons/bs";
import Loading from "../../assets/images/other/loading.png";
import "./loader.scss";

const Loader = ({ isLoading, onContinue }) => {
  return (
    <div className="initial-loader">
      <div className="initial-loader-goto">
        <button disabled={isLoading} onClickCapture={onContinue}>
          <p>Who are you?</p>
          <BsFillDoorOpenFill />
          <MdArrowRightAlt />
        </button>
      </div>
      {isLoading && (
        <div className="loading">
          <img src={Loading} alt="loading" />
        </div>
      )}
    </div>
  );
};

export default Loader;
