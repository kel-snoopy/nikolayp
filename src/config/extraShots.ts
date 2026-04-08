import extraCustodySlider1Video from "../images/cases/extrashots/custody-slider-1.mp4";
import extraCustodySlider2Image from "../images/cases/extrashots/custody-slider-2.png";
import extraHumancodeVideo from "../images/cases/extrashots/humancode-video.mp4";
import extraInvaultWalletImage from "../images/cases/extrashots/invault_wallet.png";
import extraMirageImage from "../images/cases/extrashots/mirage.png";
import extraMirage1Image from "../images/cases/extrashots/mirage-1.png";
import extraStakefiImage from "../images/cases/extrashots/stakefi.png";
import extraWasm0Video from "../images/cases/extrashots/wasm0-video.mp4";
import extraZottoSniperVideo from "../images/cases/extrashots/zotto-sniper-video.mp4";

export const extraShots = [
  {
    type: "images",
    images: [
      { video: extraCustodySlider1Video },
      { image: extraCustodySlider2Image, imageAlt: "Custody slider" },
    ],
  },
  {
    type: "video",
    video: extraWasm0Video,
    autoPlay: true,
  },
  {
    type: "image",
    image: extraStakefiImage,
    imageAlt: "StakeFi",
  },
  {
    type: "video",
    video: extraHumancodeVideo,
    autoPlay: true,
  },
  {
    type: "image",
    image: extraMirage1Image,
    imageAlt: "Mirage detail",
  },
  {
    type: "video",
    video: extraZottoSniperVideo,
    autoPlay: true,
  },
  {
    type: "image",
    image: extraMirageImage,
    imageAlt: "Mirage",
  },
  {
    type: "image",
    image: extraInvaultWalletImage,
    imageAlt: "InVault wallet",
  },
] as const;
