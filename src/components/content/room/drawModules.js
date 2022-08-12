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
import LaptopAnimation from "../../../assets/images/gifs/laptop-animation.webm";

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
    information: {
      generic: `"Todas las hojas son del viento..." Luis Alberto Spinetta.`,
      personal: "Te quiero flaco.",
    },
    styles: {
      top: "-100%",
      left: "100%",
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
    information: {
      generic: "Un cactus suaviza mi llema con su piel.",
      personal: "Te quiero gus.",
    },
    styles: {
      bottom: "100%",
      right: 0,
    },
  },
  {
    id: "cancion-animal",
    src: CancionAnimal,
    animation: null,
    media: "video",
    clickable: true,
    information: {
      generic: `"Meses navegando, tierra a la vista..." Gustavo Cerati was an argentinian music player. He is a great inspiration.`,
      personal:
        "Sometimes we have to jump to the void to experiencie extraordinarie things.",
    },
    styles: {
      top: "100%",
      left: 0,
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
    information: {
      generic:
        "Pink Floyd - The Dark Side Of The Moon (1973). Well, what to say? Feels like waking up.",
      personal: "No se cuantas veces esuche dark side.",
    },
    styles: {
      bottom: "75%",
      left: "100%",
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
    information: null,
    styles: null,
  },
  {
    id: "eyes",
    src: Eyes,
    animation: null,
    media: "video",
    clickable: true,
    information: { generic: "Everybodys eyes is unic.", personal: "Answers." },
    styles: {
      bottom: "100%",
      right: "75%",
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
    information: {
      generic: "Travel other realities to know who you really are.",
      personal: "It changed my life.",
    },
    styles: {
      top: "75%",
      left: "100%",
    },
  },
  {
    id: "lamp",
    src: Lamp,
    animation: null,
    media: "video",
    clickable: true,
    information: { generic: "Spirituality.", personal: "Connection to God?" },
    styles: {
      bottom: "100%",
      right: "75%",
    },
  },
  {
    id: "laptop",
    src: Laptop,
    animation: {
      src: LaptopAnimation,
      type: "video",
      isFullPage: false,
    },
    media: "video",
    clickable: true,
    information: {
      generic:
        "Hello World! was the first message to be sent on the internet. A revolution! My humans understand me.",
      personal: "Mi information.",
    },
    styles: {
      bottom: 0,
      right: "100%",
    },
  },
  {
    id: "left-speaker",
    src: LeftSpeaker,
    animation: null,
    media: "video",
    clickable: true,
    information: { generic: "Go to the right speaker!" },
    styles: {
      top: "-100%",
      right: 0,
    },
  },
  {
    id: "little-plant",
    src: LittlePlant,
    animation: null,
    media: "video",
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "lupe",
    src: Lupe,
    animation: null,
    media: "video",
    clickable: false,
    information: null,
    styles: null,
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
    information: { generic: "Go to the left speaker!" },
    styles: {
      top: "100%",
      right: 0,
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
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "table",
    src: Table,
    animation: null,
    media: "video",
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "triangle",
    src: Triangle,
    animation: null,
    media: "video",
    clickable: true,
    information: { personal: "I love triangles!" },
    styles: {
      bottom: "100%",
      right: "50%",
    },
  },
  {
    id: "turntable",
    src: Turntable,
    animation: null,
    media: "video",
    clickable: true,
    information: { generic: "Music quality." },
    styles: {
      top: "-100%",
      left: "50%",
    },
  },
];
