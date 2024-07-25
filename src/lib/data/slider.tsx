import { imageUrls } from "./slideImgs";

interface SlideProps {
  id: number;
  backgroundImages: {
    'sm-mob': string;
    'sm-mob-2x': string;
    'md-tab': string;
    'md-tab-2x': string;
    'lg-desktop': string;
    'lg-desktop-2x': string;
  };
  contentImg: {
    'sm-mob': string;
    'sm-mob-2x': string;
    'md-tab': string;
    'md-tab-2x': string;
    'lg-desktop': string;
    'lg-desktop-2x': string;
  };
  title: string;
  advantages: string;
  description: string;
}

const Slides: SlideProps[] = [
  {
    id: 1,
    backgroundImages: imageUrls.backgroundImages.slide1,
    contentImg: imageUrls.contentImages.slide1,
    title: 'ATVs Traveling',
    advantages: 'Feel the adrenaline rush',
    description: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
  {
    id: 2,
    backgroundImages: imageUrls.backgroundImages.slide2,
    contentImg: imageUrls.contentImages.slide2,
    title: 'Rock climbing',
    advantages: 'Destroy your limitations',
    description: 'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
  },
  {
    id: 3,
    backgroundImages: imageUrls.backgroundImages.slide3,
    contentImg: imageUrls.contentImages.slide3,
    title: 'Hot air ballooning',
    advantages: 'Get inspired',
    description: 'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
  },
  {
    id: 4,
    backgroundImages: imageUrls.backgroundImages.slide4,
    contentImg: imageUrls.contentImages.slide4,
    title: 'Skydiving',
    advantages: 'Overcome your fears',
    description: "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
  },
  {
    id: 5,
    backgroundImages: imageUrls.backgroundImages.slide5,
    contentImg: imageUrls.contentImages.slide5,
    title: 'Rafting',
    advantages: 'Trust the flow',
    description: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
];

export default Slides;

