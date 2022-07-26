import React from "react";
import Amp from "../../../assets/images/layers/amp.png";
import Artaud from "../../../assets/images/layers/artaud.png";
import Base from "../../../assets/images/layers/base.png";
import Cactus from "../../../assets/images/layers/cactus.png";
import CancionAnimal from "../../../assets/images/layers/cancion-animal.png";
import DSOTM from "../../../assets/images/layers/dsotm.png";
import Guy from "../../../assets/images/layers/guy.png";
import Electricity from "../../../assets/images/layers/electricity.png";
import Eyes from "../../../assets/images/layers/eyes.png";
import KeyWest from "../../../assets/images/layers/key-west.png";
import Lamp from "../../../assets/images/layers/lamp.png";
import LeftSpeaker from "../../../assets/images/layers/left-speaker.png";
import LittlePlant from "../../../assets/images/layers/little-plant.png";
import Lupe from "../../../assets/images/layers/lupe.png";
import Plant from "../../../assets/images/layers/plant.png";
import RightSpeaker from "../../../assets/images/layers/right-speaker.png";
import Sofa from "../../../assets/images/layers/sofa.png";
import Stand from "../../../assets/images/layers/stand.png";
import Sunglasses from "../../../assets/images/layers/sunglasses.png";
import Table from "../../../assets/images/layers/table.png";
import Triangle from "../../../assets/images/layers/triangle.png";
import Turntable from "../../../assets/images/layers/turntable.png";
import "./room.scss";

const Room = ({ onClickDSOTM }) => {
  return (
    <div className="room">
      <img src={Amp} className="amp" />
      <img src={Artaud} className="artaud" />
      <img src={Base} className="base" />
      <img src={Cactus} className="cactus" />
      <img src={CancionAnimal} className="cancion-animal" />
      <img src={DSOTM} className="dsotm" onClick={onClickDSOTM} />
      <img src={Electricity} className="electricity" />
      <img src={Eyes} className="eyes" />
      <img src={KeyWest} className="key-west" />
      <img src={Guy} className="guy" />
      <img src={Lamp} className="lamp" />
      <img src={LeftSpeaker} className="left-speaker" />
      <img src={LittlePlant} className="little-plant" />
      <img src={Lupe} className="lupe" />
      <img src={Plant} className="plant" />
      <img src={RightSpeaker} className="right-speaker" />
      <img src={Sofa} className="sofa" />
      <img src={Stand} className="stand" />
      <img src={Sunglasses} className="sunglasses" />
      <img src={Table} className="table" />
      <img src={Triangle} className="triangle" />
      <img src={Turntable} className="turntable" />
    </div>
  );
};

export default Room;
