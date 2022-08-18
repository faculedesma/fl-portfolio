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
import LaptopAnimation from "../../../assets/images/gifs/laptop-animation.gif";
import LionKing from "../../../assets/images/lion-king.png";
import Spinetta from "../../../assets/images/gifs/spinetta-artaud.webm";
import TrianglePaint from "../../../assets/images/gifs/triangle-animation.webm";
import LionSuelesMP3 from "../../../assets/sounds/lion-sueles-dejarme.mp3";
import BrainDamageMP3 from "../../../assets/sounds/brain-damage.mp3";
import SpinettaInterviewMP3 from "../../../assets/sounds/spinetta-interview.mp3";
import HAL9000DeactivationMP3 from "../../../assets/sounds/hal9000-deactivation.mp3";
import TheEndMP3 from "../../../assets/sounds/the-end-intro.mp3";
import MotherOceanMP3 from "../../../assets/sounds/mother-ocean.mp3";

export const drawModules = [
  {
    id: "amp",
    src: Amp,
    animation: null,
    clickable: true,
    information: {
      generic: "Hear me through the noise.",
    },
    styles: {
      bottom: 0,
      left: "100%",
    },
  },
  {
    id: "artaud",
    src: Artaud,
    animation: {
      src: Spinetta,
      type: "video",
      sound: SpinettaInterviewMP3,
      isFullPage: false,
    },
    clickable: true,
    information: {
      generic: `"Todas las hojas son del viento... Que calor hará sin vos en verano... Siempre desear, nunca tener... Siempre soñar, nunca creer... Las almas repudian todo encierro... No todo tiempo por pasado es mejor, manaña es mejor... Tengo tiempo para saber si lo que sueño concluye en algo... No estoy atado a ningún sueño ya..." Luis Alberto Spinetta.`,
      personal: "Te quiero flaco.",
    },
    styles: {
      top: "-50%",
      right: "100%",
    },
  },
  {
    id: "base",
    src: Base,
    animation: null,
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "cactus",
    src: Cactus,
    animation: null,
    clickable: true,
    information: {
      generic: "Un cactus suaviza mi llema con su piel.",
      personal:
        "We are part of nature and nature is part of us. It's printed in our DNA, everything that happened before us makes us reach this moment, right here right now. The future will always be uncertain. Be grateful for everything you have done to reach this point. Share yourself with others and be part of them. Be free.",
    },
    styles: {
      bottom: "100%",
      right: 0,
    },
  },
  {
    id: "cancion-animal",
    src: CancionAnimal,
    animation: {
      src: LionKing,
      type: "image",
      sound: LionSuelesMP3,
      isFullPage: false,
    },
    clickable: true,
    information: {
      generic: `"Meses navegando, tierra a la vista..." Gustavo Cerati was an argentinian musician. He is a great inspiration. `,
      personal:
        "Opportunities at each moment are infinite and at that point we have to make a decision, 0 or 1. Based on each one, a completely new reality develops, the effect of a cause of which we are co-creators. The other part will always be a mystery and the elemental reason for human curiosity. Jump into the void and become infinite.",
    },
    styles: {
      top: "100%",
      left: 0,
      maxHeight: "150px",
    },
  },
  {
    id: "dsotm",
    src: DSOTM,
    animation: {
      src: DSOTMAnimation,
      type: "video",
      sound: BrainDamageMP3,
      isFullPage: true,
    },
    clickable: true,
    information: {
      generic:
        "Pink Floyd - The Dark Side Of The Moon (1973). Well, what to say? Feels like waking up.",
      personal:
        "We'll learn what we've forgotten. As a child we dream in paradise, it feels like each new day is an opportunity to play. Then as we grow we start forgetting the earth is spinning around the sun and we don't even wonder why. Time seems to pull you down as gravity. Will you ever have the time to do what you've ever wanted before you are dead? We hope to find the ones that left us behind in another gig. But you know, why do you need all the things money can buy? What's missing there? Sharing with other beings is what connects us, no matter how different we can be from each other. We shouldn't forget that from here we only see one side of the moon.",
    },
    styles: {
      bottom: "50%",
      left: "100%",
    },
  },
  {
    id: "guy",
    src: Guy,
    animation: null,
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "electricity",
    src: Electricity,
    animation: null,
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "eyes",
    src: Eyes,
    animation: null,
    clickable: true,
    information: {
      generic: "Florecer mirandote a los ojos.",
      personal:
        "Everybody's eyes are unique. Go deep into them to find answers. Everything is your reflection. Empathy.",
    },
    styles: {
      bottom: "100%",
      left: 0,
    },
  },
  {
    id: "key-west",
    src: KeyWest,
    animation: {
      src: KWAnimation,
      type: "video",
      sound: MotherOceanMP3,
      isFullPage: false,
    },
    clickable: true,
    information: {
      generic: "Travel other realities to know who you really are.",
      personal:
        "If I had to choose one trip: finishing 2017 I travelled to a magical place called Key West, in Florida. Didn't know what to really expect but I had the conviction I wanted to do it. It changed my life. Made me realize the power of humans when we work together and collaborate for a greater purpose. Definitely want to keep exploring this vast world in which we live.",
    },
    styles: {
      top: 0,
      right: "100%",
    },
  },
  {
    id: "lamp",
    src: Lamp,
    animation: null,
    clickable: true,
    information: { generic: "Who's your God?", personal: "" },
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
      type: "image",
      sound: HAL9000DeactivationMP3,
      isFullPage: true,
    },
    clickable: true,
    information: {
      generic:
        "Hello World! was the first message to be sent on the internet. A revolution! My humans understand me.",
      personal: `My love for computers started when i was a kid, always made me courious how to interact with them. First playing video-games and then studying computer science in my town's college. I've graduate and started working as a software developer. After years of working i became aware of the true power of technology and how limitless can be. The universe is expanding and we are expanding with him, there's no stopping for learning. Let's join.`,
    },
    styles: {
      top: 0,
      right: "100%",
    },
  },
  {
    id: "left-speaker",
    src: LeftSpeaker,
    animation: {
      src: null,
      type: null,
      sound: TheEndMP3,
      isFullPage: false,
    },
    clickable: true,
    information: {
      generic: "Go to the right speaker without touching anything!",
    },
    styles: {
      top: "-100%",
      right: 0,
    },
  },
  {
    id: "little-plant",
    src: LittlePlant,
    animation: {
      src: null,
    },
    clickable: true,
    information: {
      generic: "Take care of your home!",
      personal:
        "Plant more trees. Save electricity. Save water. Use less paper. Save fuel. Use jute bags. Quit smoking. Recycle.",
    },
    styles: {
      top: "50%",
      right: 0,
    },
  },
  {
    id: "lupe",
    src: Lupe,
    animation: null,
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "plant",
    src: Plant,
    animation: null,
    animation: null,
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "plant-top",
    src: PlantTop,
    animation: {
      src: null,
    },
    clickable: true,
    information: {
      generic: "Take care of your home!",
      personal:
        "Plant more trees. Save electricity. Save water. Use less paper. Save fuel. Use jute bags. Quit smoking. Recycle.",
    },
    styles: {
      bottom: "50%",
      left: "100%",
    },
  },
  {
    id: "right-hand",
    src: RightHand,
    animation: null,
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "right-speaker",
    src: RightSpeaker,
    animation: {
      src: null,
      type: null,
      sound: TheEndMP3,
      isFullPage: false,
    },
    clickable: true,
    information: {
      generic: "Go to the left speaker without touching anything!",
    },
    styles: {
      top: "100%",
      right: 0,
    },
  },
  {
    id: "sofa",
    src: Sofa,
    animation: null,
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "stand",
    src: Stand,
    animation: null,
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "sunglasses",
    src: Sunglasses,
    animation: null,
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "table",
    src: Table,
    animation: null,
    clickable: false,
    information: null,
    styles: null,
  },
  {
    id: "triangle",
    src: Triangle,
    animation: {
      src: TrianglePaint,
      type: "video",
      sound: null,
      isFullPage: true,
    },
    clickable: true,
    information: {
      generic: "Paint who you are.",
      personal: `Art was always a really important part of my expression and a direct bridge with my imagination. Started as a child painting in school going through upside downs and today is an essential part of me. I love to create things from fantasy trying to have a better understanding of reality.`,
    },
    styles: {
      bottom: "100%",
      right: "-50%",
    },
  },
  {
    id: "turntable",
    src: Turntable,
    animation: null,
    clickable: true,
    information: {
      generic: "",
      personal: "As you may realized music is a really big part of my life.",
    },
    styles: {
      bottom: "50%",
      right: "100%",
    },
  },
];
