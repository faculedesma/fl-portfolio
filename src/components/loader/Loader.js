import React from "react";
import Satellite from "../common/animations/Satellite";
import PsychHeadphones from "../../assets/images/psych-headphones.png";
import { MdArrowRightAlt } from "react-icons/md";
import { BsFillDoorOpenFill } from "react-icons/bs";
import "./loader.scss";

const Loader = ({ isLoading, onContinue }) => {
  return (
    <div className="initial-loader">
      <Satellite />
      <div className="initial-loader-recom">
        <img src={PsychHeadphones} alt="psych-headphones" />
        <p>Wear your headphones</p>
      </div>
      <div className="initial-loader-goto">
        <button disabled={isLoading} onClick={onContinue}>
          <p>Fly with me</p>
          <BsFillDoorOpenFill />
          <MdArrowRightAlt />
        </button>
      </div>
    </div>
  );
};

export default Loader;
