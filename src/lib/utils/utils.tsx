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
  id: number;
  contentImg: any;
  title: string;
  advantages: string;
  description: string;
  backgroundImage: string;
  isDesktop: boolean;
  setActiveIndex: (index: number) => void;
  activeIndex: number;
}