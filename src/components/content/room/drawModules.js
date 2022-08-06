import Amp from "../../../assets/images/layers/amp.png";
import Artaud from "../../../assets/images/layers/artaud.png";
import Base from "../../../assets/images/layers/base.png";
import Cactus from "../../../assets/images/layers/cactus.png";
import CancionAnimal from "../../../assets/images/layers/cancion-animal.png";
import DSOTM from "../../../assets/images/layers/dsotm.png";
import Guy from "../../../assets/images/layers/guy.png";
import RightHand from "../../../assets/images/layers/right-hand.png";
import Electricity from "../../../assets/images/layers/electricity.png";
import Eyes from "../../../assets/images/layers/eyes.png";
import KeyWest from "../../../assets/images/layers/key-west.png";
import Lamp from "../../../assets/images/layers/lamp.png";
import Laptop from "../../../assets/images/layers/laptop.png";
import LeftSpeaker from "../../../assets/images/layers/left-speaker.png";
import LittlePlant from "../../../assets/images/layers/little-plant.png";
import Lupe from "../../../assets/images/layers/lupe.png";
import Plant from "../../../assets/images/layers/plant.png";
import PlantTop from "../../../assets/images/layers/plant-top.png";
import RightSpeaker from "../../../assets/images/layers/right-speaker.png";
import Sofa from "../../../assets/images/layers/sofa.png";
import Stand from "../../../assets/images/layers/stand.png";
import Sunglasses from "../../../assets/images/layers/sunglasses.png";
import Table from "../../../assets/images/layers/table.png";
import Triangle from "../../../assets/images/layers/triangle.png";
import Turntable from "../../../assets/images/layers/turntable.png";
import DSOTMAnimation from "../../../assets/images/gifs/dsotm-animation.webm";
import KWAnimation from "../../../assets/images/gifs/kw-animation.webm";

export const drawModules = [
  {
    id: "amp",
    src: Amp,
    animation: null,
    media: "video",
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "artaud",
    src: Artaud,
    animation: null,
    media: "video",
    clickable: true,
    information: `"Todas las hojas son del viento..." Luis Alberto Spinetta.`,
    styles: {
      top: "-100%",
      bottom: 0,
      left: "100%",
      right: 0,
    },
  },
  {
    id: "base",
    src: Base,
    animation: null,
    media: "video",
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "cactus",
    src: Cactus,
    animation: null,
    media: "video",
    clickable: true,
    information: "Un cactus suaviza mi llema con su piel.",
    styles: {
      top: 0,
      bottom: 0,
      left: "100%",
      right: 0,
    },
  },
  {
    id: "cancion-animal",
    src: CancionAnimal,
    animation: null,
    media: "video",
    clickable: true,
    information: `"Meses navegando, tierra a la vista..." Gustavo Cerati was an argentinian music player. He is a great inspiration.`,
    styles: {
      top: "-100%",
      bottom: 0,
      left: "100%",
      right: 0,
    },
  },
  {
    id: "dsotm",
    src: DSOTM,
    animation: {
      src: DSOTMAnimation,
      type: "video",
      isFullPage: true,
    },
    media: "video",
    clickable: true,
    information:
      "Pink Floyd - The Dark Side Of The Moon (1973). Well, what to say? Feels like waking up.",
    styles: {
      top: "-100%",
      bottom: 0,
      left: "100%",
      right: 0,
    },
  },
  {
    id: "guy",
    src: Guy,
    animation: null,
    media: "video",
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "right-hand",
    src: RightHand,
    animation: null,
    media: "image",
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "electricity",
    src: Electricity,
    animation: null,
    media: "video",
    clickable: false,
    information: "Be carefull!",
    styles: null,
  },
  {
    id: "eyes",
    src: Eyes,
    animation: null,
    media: "video",
    clickable: true,
    information: "Answers.",
    styles: {
      top: "-100%",
      bottom: 0,
      left: "100%",
      right: 0,
    },
  },
  {
    id: "key-west",
    src: KeyWest,
    animation: {
      src: KWAnimation,
      type: "video",
      isFullPage: false,
    },
    media: "video",
    clickable: true,
    information: "Travel other realities to know who you really are.",
    styles: {
      top: "-100%",
      bottom: 0,
      left: "100%",
      right: 0,
    },
  },
  {
    id: "lamp",
    src: Lamp,
    animation: null,
    media: "video",
    clickable: true,
    information: "Spirituality.",
    styles: {
      top: "-100%",
      bottom: 0,
      left: "100%",
      right: 0,
    },
  },
  {
    id: "laptop",
    src: Laptop,
    animation: null,
    media: "video",
    clickable: true,
    information:
      "Hello World! was the first string to be sent on the internet. A revolution!",
    styles: {
      top: "-100%",
      bottom: 0,
      left: "100%",
      right: 0,
    },
  },
  {
    id: "left-speaker",
    src: LeftSpeaker,
    animation: null,
    media: "video",
    clickable: true,
    information: "Go to the right speaker!",
    styles: {
      top: "-100%",
      bottom: 0,
      left: "100%",
      right: 0,
    },
  },
  {
    id: "little-plant",
    src: LittlePlant,
    animation: null,
    media: "video",
    clickable: true,
    information: "Take aware of the planet!",
    styles: {
      top: 0,
      bottom: "-100%",
      left: 0,
      right: "100%",
    },
  },
  {
    id: "lupe",
    src: Lupe,
    animation: null,
    media: "video",
    clickable: true,
    information: "Quiero un zoom anatomico.",
    styles: {
      top: "100%",
      bottom: 0,
      left: 0,
      right: "100%",
    },
  },
  {
    id: "plant",
    src: Plant,
    animation: null,
    media: "video",
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "plant-top",
    src: PlantTop,
    animation: null,
    media: "video",
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "right-speaker",
    src: RightSpeaker,
    animation: null,
    media: "video",
    clickable: true,
    information: "Go to the left speaker!",
    styles: {
      top: "100%",
      bottom: 0,
      left: 0,
      right: "100%",
    },
  },
  {
    id: "sofa",
    src: Sofa,
    animation: null,
    media: "video",
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "stand",
    src: Stand,
    animation: null,
    media: "video",
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "sunglasses",
    src: Sunglasses,
    animation: null,
    media: "video",
    clickable: true,
    information: "Sometimes sun is too shinny.",
    styles: {
      top: "100%",
      bottom: 0,
      left: 0,
      right: "100%",
    },
  },
  {
    id: "table",
    src: Table,
    animation: null,
    media: "video",
    clickable: false,
    information: "DIY with friends.",
    styles: {
      top: "100%",
      bottom: 0,
      left: 0,
      right: "100%",
    },
  },
  {
    id: "triangle",
    src: Triangle,
    animation: null,
    media: "video",
    clickable: true,
    information: "I love triangles!",
    styles: {
      top: "100%",
      bottom: 0,
      left: 0,
      right: "100%",
    },
  },
  {
    id: "turntable",
    src: Turntable,
    animation: null,
    media: "video",
    clickable: true,
    information: "Music quality.",
    styles: {
      top: "100%",
      bottom: 0,
      left: 0,
      right: "100%",
    },
  },
];
