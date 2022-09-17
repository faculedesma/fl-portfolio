import React from "react";
import LetterEF from "../../../assets/images/other/letter-ef.png";
import "./main-title.scss";

const MainTitle = () => {
  return (
    <div className="main-title">
      <p className="h">H</p>
      <p className="i">i</p>
      <p className="comma">,</p>
      &nbsp;
      <p className="i-uppercase">I</p>
      <p className="aposth">'</p>
      <p className="m">m</p>
      &nbsp;
      <img
        id="f"
        className="f letter-special-click"
        src={LetterEF}
        alt="letter-ef"
      />
      <p className="a">a</p>
      <p className="c">c</p>
      <p className="u">u</p>
      <p className="n">n</p>
      <p className="d">d</p>
      <p className="o">o</p>
    </div>
  );
};

export default MainTitle;
