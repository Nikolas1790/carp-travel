export const getPaddingTop = (id: number): string => {
  switch (id) {
    case 1:
      return 'pt-0';
    case 2:
      return 'pt-11';
    case 3:
      return 'pt-24';
    case 4:
      return 'pt-[164px]';
    case 5:
      return 'pt-[210px]';
    default:
      return '';
  }
};

export interface ContentImg {
  'sm-mob': string;
  'sm-mob-2x': string;
  'md-tab': string;
  'md-tab-2x': string;
  'lg-desktop': string;
  'lg-desktop-2x': string;
}

export interface SlideItemProps {
  slide: {
    id: number;
    contentImg: any;
    title: string;
    advantages: string;
    description: string;
  };
  isDesktop: boolean;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const getImageForScreen = ( images: any, setIsDesktop: (isDesktop: boolean) => void ) => {
  const isRetina = window.devicePixelRatio > 1;
  const width = window.innerWidth;

  if (width < 768) {
    setIsDesktop(false);
    return isRetina ? images['sm-mob-2x'] : images['sm-mob'];
  } else if (width >= 768 && width <= 1280) {
    setIsDesktop(false);
    return isRetina ? images['md-tab-2x'] : images['md-tab'];
  } else if (width >= 1280) {
    setIsDesktop(true);
    return isRetina ? images['lg-desktop-2x'] : images['lg-desktop'];
  }
};

export const socialLinks: { [key: string]: string } = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
  tiktok: "https://www.tiktok.com/"
};

export interface IFormInput {
  fullName: string;
  email: string;
  position?: string;
  phone: string;
  message?: string;
  consent: boolean;
}

export interface IContactForm {
  fullName: string;
  email: string;
  message?: string;
}