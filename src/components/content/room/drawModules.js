// Layers
import Amp from "../../../assets/images/layers/amp.png";
import AshTray from "../../../assets/images/layers/ashtray.png";
import Artaud from "../../../assets/images/layers/artaud.png";
import Base from "../../../assets/images/layers/base.png";
import Beer from "../../../assets/images/layers/beer.png";
import Cables from "../../../assets/images/layers/cables.png";
import Cactus from "../../../assets/images/layers/cactus.png";
import CancionAnimal from "../../../assets/images/layers/cancion-animal.png";
import DSOTM from "../../../assets/images/layers/dsotm.png";
import Guy from "../../../assets/images/layers/guy.png";
import Electricity from "../../../assets/images/layers/electricity.png";
import ElectricGuitar from "../../../assets/images/layers/electric-guitar.png";
import EGStand from "../../../assets/images/layers/eg-stand.png";
import Headphones from "../../../assets/images/layers/headphones.png";
import HPSupport from "../../../assets/images/layers/hp-support.png";
import KeyWest from "../../../assets/images/layers/key-west.png";
import LaBiblia from "../../../assets/images/layers/la-biblia.png";
import Lamp from "../../../assets/images/layers/lamp.png";
import Laptop from "../../../assets/images/layers/laptop.png";
import LeftSpeaker from "../../../assets/images/layers/left-speaker.png";
import LittlePlant from "../../../assets/images/layers/little-plant.png";
import Lupe from "../../../assets/images/layers/lupe.png";
import Paint from "../../../assets/images/layers/paint.png";
import Psylocibin from "../../../assets/images/layers/psylocibin.png";
import Orange from "../../../assets/images/layers/orange.png";
import Plant from "../../../assets/images/layers/plant.png";
import PreAmp from "../../../assets/images/layers/preamp.png";
import RightSpeaker from "../../../assets/images/layers/right-speaker.png";
import Sofa from "../../../assets/images/layers/sofa.png";
import Cushions from "../../../assets/images/layers/cushions.png";
import Stand from "../../../assets/images/layers/stand.png";
import Stalker from "../../../assets/images/layers/stalker.png";
import Sunglasses from "../../../assets/images/layers/sunglasses.png";
import Table from "../../../assets/images/layers/table.png";
import Triangle from "../../../assets/images/layers/triangle.png";
import Turntable from "../../../assets/images/layers/turntable.png";
import WeedJar from "../../../assets/images/layers/weed.png";
// Animations
// import DSOTMAnimation from "../../../assets/images/gifs/dsotm-animation.png";
import KWAnimation from "../../../assets/images/gifs/kw-animation.png";
import HAL900 from "../../../assets/images/gifs/hal9000.png";
import GuyGlitch from "../../../assets/images/gifs/guy-hal9000.png";
import Cerati from "../../../assets/images/gifs/cerati.png";
import Spinetta from "../../../assets/images/gifs/spinetta-artaud.mp4";
import TrianglePaint from "../../../assets/images/gifs/triangle-animation.png";
// import LSD from "../../../assets/images/gifs/lsd-animation.png";
import LupeAnimation from "../../../assets/images/gifs/lupe-animation.png";
import Moris from "../../../assets/images/gifs/moris.png";
import MorisSoul from "../../../assets/images/gifs/moris-soul.png";
import TurntableBW from "../../../assets/images/gifs/turntable-bw.png";
import PlantGrow from "../../../assets/images/gifs/plant-grow.png";
import StalkerDialogue from "../../../assets/images/gifs/stalker-dialogue.mp4";
import Pedro from "../../../assets/images/gifs/pedro.png";
import LaBibliaAnimate from "../../../assets/images/gifs/la-biblia-animate.png";
import Mescal from "../../../assets/images/gallery/mescal.png";
// Sounds
import SuelesDejarmeSoloMP3 from "../../../assets/sounds/lion-sueles-dejarme.mp3";
import BrainDamageMP3 from "../../../assets/sounds/brain-damage.mp3";
import HAL9000DeactivationMP3 from "../../../assets/sounds/hal9000-deactivation.mp3";
import TheEndMP3 from "../../../assets/sounds/the-end-intro.mp3";
import MotherOceanMP3 from "../../../assets/sounds/mother-ocean.mp3";
import EnRemolinosMP3 from "../../../assets/sounds/en-remolinos.mp3";
import PianoOlivos from "../../../assets/sounds/piano-olivos.mp3";
import BeerOpenMP3 from "../../../assets/sounds/beer-open.mp3";
import Genesis from "../../../assets/sounds/genesis.mp3";
import CactusMP3 from "../../../assets/sounds/cactus.mp3";

export const drawModules = [
  {
    id: "amp",
    src: Amp,
    animations: [
      {
        id: "moris",
        src: Moris,
        type: "image",
        sound: PianoOlivos,
        overlay: false,
      },
      {
        id: "moris-soul",
        src: MorisSoul,
        type: "image",
        sound: null,
        overlay: false,
      },
      {
        id: "turntable-bw",
        src: TurntableBW,
        type: "image",
        sound: null,
        overlay: false,
      },
    ],
    clickable: true,
    information: {
      generic: "Hear me through the noise.",
    },
  },
  {
    id: "ashtray",
    src: AshTray,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "artaud",
    src: Artaud,
    animations: [
      {
        id: "artaud",
        src: Spinetta,
        type: "video",
        sound: null,
        overlay: false,
      },
    ],
    clickable: true,
    information: {
      generic: `"Todas las hojas son del viento... Que calor hará sin vos en verano... Siempre desear, nunca tener... Siempre soñar, nunca creer... Las almas repudian todo encierro... No todo tiempo por pasado es mejor, manaña es mejor... Tengo tiempo para saber si lo que sueño concluye en algo... No estoy atado a ningún sueño ya..." Luis Alberto Spinetta.`,
      personal: "Te quiero flaco.",
    },
  },
  {
    id: "base",
    src: Base,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "beer",
    src: Beer,
    animations: [
      {
        src: null,
        type: null,
        sound: BeerOpenMP3,
        overlay: false,
      },
    ],
    clickable: true,
    information: null,
  },
  {
    id: "orange",
    src: Orange,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "cables",
    src: Cables,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "cactus",
    src: Cactus,
    animations: [
      {
        id: "pedro",
        src: Pedro,
        type: "image",
        sound: CactusMP3,
        overlay: true,
      },
    ],
    clickable: true,
    information: {
      generic: "Cuando te busco no hay sitio en dónde no estés.",
      personal:
        "We are part of nature and nature is part of us. It's printed in our DNA, everything that happened before us makes us reach this moment, right here right now. The future will always be uncertain. Be grateful for everything you have done to reach this point. Share yourself with others and be part of them. Be free.",
    },
  },
  {
    id: "cancion-animal",
    src: CancionAnimal,
    animations: [
      {
        id: "cancion-animal",
        src: Cerati,
        type: "image",
        sound: SuelesDejarmeSoloMP3,
        overlay: false,
      },
    ],
    clickable: true,
    information: {
      generic: `"Meses navegando, tierra a la vista..." Gustavo Cerati was an argentinian musician. He is a great inspiration. `,
      personal:
        "Opportunities at each moment are infinite and at that point we have to make a decision, 0 or 1. Based on each one, a completely new reality develops, the effect of a cause of which we are co-creators. The other part will always be a mystery and the elemental reason for human curiosity. Jump into the void and become infinite.",
    },
  },
  {
    id: "dsotm",
    src: DSOTM,
    animations: [
      {
        src: null,
        type: "image",
        sound: BrainDamageMP3,
        overlay: true,
      },
    ],
    clickable: true,
    information: {
      generic:
        "Pink Floyd - The Dark Side Of The Moon (1973). Well, what to say? Feels like waking up.",
      personal:
        "We'll learn what we've forgotten. As a child we dream in paradise, it feels like each new day is an opportunity to play. Then as we grow we start forgetting the earth is spinning around the sun and we don't even wonder why. Time seems to pull you down as gravity. Will you ever have the time to do what you've ever wanted before you are dead? We hope to find the ones that left us behind in another gig. But you know, why do you need all the things money can buy? What's missing there? Sharing with other beings is what connects us, no matter how different we can be from each other. We shouldn't forget that from here we only see one side of the moon.",
    },
  },
  {
    id: "guy",
    src: Guy,
    animations: [
      {
        src: null,
        type: null,
        sound: EnRemolinosMP3,
        overlay: false,
      },
    ],
    clickable: true,
    information: {
      generic: "Florecer mirándote a los ojos.",
      personal:
        "Everybody's eyes are unique. Go deep into them to find answers. Everything is your reflection. Empathy.",
    },
  },
  {
    id: "electricity",
    src: Electricity,
    animation: null,
    clickable: false,
  },
  {
    id: "electric-guitar",
    src: ElectricGuitar,
    animations: [
      {
        src: null,
        type: null,
        sound: SuelesDejarmeSoloMP3,
        overlay: false,
      },
    ],
    clickable: true,
    information: null,
  },
  {
    id: "eg-stand",
    src: EGStand,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "headphones",
    src: Headphones,
    animations: [
      {
        src: null,
        type: null,
        sound: TheEndMP3,
        overlay: false,
      },
    ],
    clickable: true,
    information: null,
  },
  {
    id: "hp-support",
    src: HPSupport,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "key-west",
    src: KeyWest,
    animations: [
      {
        id: "key-west",
        src: KWAnimation,
        type: "image",
        sound: MotherOceanMP3,
        overlay: false,
      },
    ],
    clickable: true,
    information: {
      generic: "Travel other realities to know who you really are.",
      personal:
        "If I had to choose one trip: finishing 2017 I travelled to a magical place called Key West, in Florida. Didn't know what to really expect but I had the conviction I wanted to do it. It changed my life. Made me realize the power of humans when we work together and collaborate for a greater purpose. Definitely want to keep exploring this vast world in which we live.",
    },
  },
  {
    id: "la-biblia",
    src: LaBiblia,
    animations: [
      {
        id: "la-biblia-animate",
        src: null,
        type: "image",
        sound: Genesis,
        overlay: true,
      },
    ],
    clickable: true,
    information: null,
  },
  {
    id: "lamp",
    src: Lamp,
    animations: [],
    clickable: true,
    information: { generic: "Who's your God?", personal: "" },
  },
  {
    id: "laptop",
    src: Laptop,
    animations: [
      {
        id: "hal9000",
        src: HAL900,
        type: "image",
        sound: HAL9000DeactivationMP3,
        overlay: true,
      },
      {
        id: "guy-glitch",
        src: GuyGlitch,
        type: "image",
        sound: null,
        overlay: false,
      },
    ],
    clickable: true,
    information: {
      generic:
        "Hello World! was the first message to be sent on the internet. A revolution! My humans understand me.",
      personal: `My love for computers started when i was a kid, always made me courious how to interact with them. First playing video-games and then studying computer science in my town's college. I've graduate and started working as a software developer. After years of working i became aware of the true power of technology and how limitless can be. The universe is expanding and we are expanding with him, there's no stopping for learning. Let's join.`,
    },
  },
  {
    id: "left-speaker",
    src: LeftSpeaker,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "little-plant",
    src: LittlePlant,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "lupe",
    src: Lupe,
    animations: [
      {
        id: "lupe",
        src: LupeAnimation,
        type: "image",
        sound: null,
        overlay: false,
      },
    ],
    clickable: true,
    information: null,
  },
  {
    id: "paint",
    src: Paint,
    animations: [
      {
        id: "mescal",
        src: Mescal,
        type: "image",
        sound: null,
        overlay: true,
      },
    ],
    clickable: true,
    information: {
      generic: `Click to see some artwork i've made!`,
    },
  },
  {
    id: "plant",
    src: Plant,
    animations: [
      {
        id: "plant-grow",
        src: PlantGrow,
        type: "image",
        sound: null,
        overlay: true,
      },
    ],
    clickable: true,
    information: {
      generic: "Take care of your home!",
      personal:
        "Plant more trees. Save electricity. Save water. Use less paper. Save fuel. Use jute bags. Quit smoking. Recycle.",
    },
  },
  {
    id: "psylocibin",
    src: Psylocibin,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "preamp",
    src: PreAmp,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "right-speaker",
    src: RightSpeaker,
    animations: null,
    clickable: false,
    information: null,
  },
  // {
  //   id: "sofa",
  //   src: Sofa,
  //   animations: null,
  //   clickable: false,
  //   information: null,
  // },
  {
    id: "cushions",
    src: Cushions,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "stand",
    src: Stand,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "stalker",
    src: Stalker,
    animations: [
      {
        id: "stalker-dialogue",
        src: StalkerDialogue,
        type: "video",
        sound: null,
        overlay: false,
        muted: false,
      },
    ],
    clickable: true,
    information: null,
  },
  {
    id: "sunglasses",
    src: Sunglasses,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "table",
    src: Table,
    animations: null,
    clickable: false,
    information: null,
  },
  {
    id: "triangle",
    src: Triangle,
    animations: [
      {
        id: "triangle",
        src: TrianglePaint,
        type: "image",
        sound: null,
        overlay: true,
      },
    ],
    clickable: true,
    information: {
      generic: "Paint who you are.",
      personal: `Art was always a really important part of my expression and a direct bridge with my imagination. Started as a child painting in school going through upside downs and today is an essential part of me. I love to create things from fantasy trying to have a better understanding of reality.`,
    },
  },
  {
    id: "turntable",
    src: Turntable,
    animations: [
      {
        src: null,
        type: "image",
        sound: null,
        overlay: true,
      },
    ],
    clickable: true,
    information: {
      generic: "",
      personal: "As you may realized music is a really big part of my life.",
    },
  },
  {
    id: "weed",
    src: WeedJar,
    animations: null,
    clickable: false,
    information: null,
  },
];
