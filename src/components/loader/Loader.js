import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { BsHeadphones } from "react-icons/bs";
import Loading from "../../assets/images/other/loading.png";
import Tooltip from "../common/tooltip/Tooltip";
import "./loader.scss";

const headphonesInfo = { personal: "Use headphones for the full experience!" };

const Loader = ({ isLoading, onContinue }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="initial-loader">
      <div className="initial-loader-goto">
        <div className="headphones">
          <BsHeadphones
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          />
          {open && <Tooltip information={headphonesInfo} />}
        </div>
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
