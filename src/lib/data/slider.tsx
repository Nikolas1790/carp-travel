interface Slide {
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

const Slides: Slide[] = [
  {
    id: 1,
    backgroundImages: {
    'sm-mob': '/img/services/backgroundImage/mob-bg-card-1.jpg',
    'sm-mob-2x': '/img/services/backgroundImage/mob-bg-card-1@2x.jpg',
    'md-tab': '/img/services/backgroundImage/tablet-bg-card-1.jpg',
    'md-tab-2x': '/img/services/backgroundImage/tablet-bg-card-1@2x.jpg',
    'lg-desktop': '/img/services/backgroundImage/desc-bg-card-1.jpg',
    'lg-desktop-2x': '/img/services/backgroundImage/desc-bg-card-1@2x.jpg',
  },
    contentImg: {
      'sm-mob': '/img/services/cards/mob-services-1-card.jpg',
      'sm-mob-2x': '/img/services/cards/mob-services-1-card@2x.jpg',
      'md-tab': '/img/services/cards/tablet-services-1-card.jpg',
      'md-tab-2x': '/img/services/cards/tablet-services-1-card@2x.jpg',
      'lg-desktop': '/img/services/cards/desc-services-1-card.jpg',
      'lg-desktop-2x': '/img/services/cards/desc-services-1-card@2x.jpg',
    },
    title: 'ATVs Traveling',
    advantages: 'Feel the adrenaline rush',
    description: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
  {
    id: 2,
    backgroundImages: {
      'sm-mob': '/img/services/backgroundImage/mob-bg-card-2.jpg',
      'sm-mob-2x': '/img/services/backgroundImage/mob-bg-card-2@2x.jpg',
      'md-tab': '/img/services/backgroundImage/tablet-bg-card-2.jpg',
      'md-tab-2x': '/img/services/backgroundImage/tablet-bg-card-2@2x.jpg',
      'lg-desktop': '/img/services/backgroundImage/desc-bg-card-2.jpg',
      'lg-desktop-2x': '/img/services/backgroundImage/desc-bg-card-2@2x.jpg',
    },
    contentImg: {
      'sm-mob': '/img/services/cards/mob-services-2-card.jpg',
      'sm-mob-2x': '/img/services/cards/mob-services-2-card@2x.jpg',
      'md-tab': '/img/services/cards/tablet-services-2-card.jpg',
      'md-tab-2x': '/img/services/cards/tablet-services-2-card@2x.jpg',
      'lg-desktop': '/img/services/cards/desc-services-2-card.jpg',
      'lg-desktop-2x': '/img/services/cards/desc-services-2-card@2x.jpg',
    },
    title: 'Rock climbing',
    advantages: 'Destroy your limitations',
    description: 'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
  },
  {
    id: 3,
    backgroundImages: {
      'sm-mob': '/img/services/backgroundImage/mob-bg-card-3.jpg',
      'sm-mob-2x': '/img/services/backgroundImage/mob-bg-card-3@2x.jpg',
      'md-tab': '/img/services/backgroundImage/tablet-bg-card-3.jpg',
      'md-tab-2x': '/img/services/backgroundImage/tablet-bg-card-3@2x.jpg',
      'lg-desktop': '/img/services/backgroundImage/desc-bg-card-3.jpg',
      'lg-desktop-2x': '/img/services/backgroundImage/desc-bg-card-3@2x.jpg',
    },
    contentImg: {
      'sm-mob': '/img/services/cards/mob-services-3-card.jpg',
      'sm-mob-2x': '/img/services/cards/mob-services-3-card@2x.jpg',
      'md-tab': '/img/services/cards/tablet-services-3-card.jpg',
      'md-tab-2x': '/img/services/cards/tablet-services-3-card@2x.jpg',
      'lg-desktop': '/img/services/cards/desc-services-3-card.jpg',
      'lg-desktop-2x': '/img/services/cards/desc-services-3-card@2x.jpg',
    },
    title: 'Hot air ballooning',
    advantages: 'Get inspired',
    description: 'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
  },
  {
    id: 4,
    backgroundImages: {
      'sm-mob': '/img/services/backgroundImage/mob-bg-card-4.jpg',
      'sm-mob-2x': '/img/services/backgroundImage/mob-bg-card-4@2x.jpg',
      'md-tab': '/img/services/backgroundImage/tablet-bg-card-4.jpg',
      'md-tab-2x': '/img/services/backgroundImage/tablet-bg-card-4@2x.jpg',
      'lg-desktop': '/img/services/backgroundImage/desc-bg-card-4.jpg',
      'lg-desktop-2x': '/img/services/backgroundImage/desc-bg-card-4@2x.jpg',
    },
    contentImg: {
      'sm-mob': '/img/services/cards/mob-services-4-card.jpg',
      'sm-mob-2x': '/img/services/cards/mob-services-4-card@2x.jpg',
      'md-tab': '/img/services/cards/tablet-services-4-card.jpg',
      'md-tab-2x': '/img/services/cards/tablet-services-4-card@2x.jpg',
      'lg-desktop': '/img/services/cards/desc-services-4-card.jpg',
      'lg-desktop-2x': '/img/services/cards/desc-services-4-card@2x.jpg',
    },
    title: 'Skydiving',
    advantages: 'Overcome your fears',
    description: "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
  },
  {
    id: 5,
    backgroundImages: {
      'sm-mob': '/img/services/backgroundImage/mob-bg-card-5.jpg',
      'sm-mob-2x': '/img/services/backgroundImage/mob-bg-card-5@2x.jpg',
      'md-tab': '/img/services/backgroundImage/tablet-bg-card-5.jpg',
      'md-tab-2x': '/img/services/backgroundImage/tablet-bg-card-5@2x.jpg',
      'lg-desktop': '/img/services/backgroundImage/desc-bg-card-5.jpg',
      'lg-desktop-2x': '/img/services/backgroundImage/desc-bg-card-5@2x.jpg',
    },
    contentImg: {
      'sm-mob': '/img/services/cards/mob-services-5-card.jpg',
      'sm-mob-2x': '/img/services/cards/mob-services-5-card@2x.jpg',
      'md-tab': '/img/services/cards/tablet-services-5-card.jpg',
      'md-tab-2x': '/img/services/cards/tablet-services-5-card@2x.jpg',
      'lg-desktop': '/img/services/cards/desc-services-5-card.jpg',
      'lg-desktop-2x': '/img/services/cards/desc-services-5-card@2x.jpg',
    },
    title: 'Rafting',
    advantages: 'Trust the flow',
    description: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
];

export default Slides;

