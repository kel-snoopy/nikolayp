import ankrImage from "../images/cases/ankr.jpg";
import ankrVideo from "../images/cases/ankr.mp4";
import ankrNavigationSlider1Video1 from "../images/cases/ankr/navigation-slider1-1.mp4";
import ankrNavigationSlider1Image2 from "../images/cases/ankr/navigation-slider1-2.png";
import ankrNavigationSlider1Image3 from "../images/cases/ankr/navigation-slider1-3.png";
import ankrNavigationSlider1Image4 from "../images/cases/ankr/navigation-slider1-4.png";
import ankrNavigation2Image from "../images/cases/ankr/navigation2-2.png";
import ankrNavigation2Video from "../images/cases/ankr/navigation2-1.mp4";

export const extraShots = [
  {
    type: "video",
    video: ankrVideo,
  },
  {
    type: "image",
    image: ankrImage,
    imageAlt: "Ankr case preview",
  },
  {
    type: "images",
    images: [
      { video: ankrNavigationSlider1Video1 },
      { image: ankrNavigationSlider1Image2, imageAlt: "Ankr navigation slider 2" },
      { image: ankrNavigationSlider1Image3, imageAlt: "Ankr navigation slider 3" },
      { image: ankrNavigationSlider1Image4, imageAlt: "Ankr navigation slider 4" },
    ],
  },
  {
    type: "half",
    images: [
      { video: ankrNavigation2Video },
      { image: ankrNavigation2Image, imageAlt: "Ankr navigation 2" },
    ],
  },
] as const;