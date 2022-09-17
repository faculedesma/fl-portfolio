import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { BsFillDoorOpenFill } from "react-icons/bs";
import "./loader.scss";

const Loader = ({ isLoading, onContinue }) => {
  return (
    <div className="initial-loader">
      <div className="initial-loader-goto">
        <button disabled={isLoading} onClick={onContinue}>
          <p>Who are you?</p>
          <BsFillDoorOpenFill />
          <MdArrowRightAlt />
        </button>
      </div>
    </div>
  );
};

export default Loader;
