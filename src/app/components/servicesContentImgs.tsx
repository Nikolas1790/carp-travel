import { ContentImg } from '../../lib/utils/utils';
import { FC } from 'react';

interface ServicesContentImgsProps {
  title: string;
  contentImg: ContentImg;
}

const ServicesContentImgs: FC<ServicesContentImgsProps> = ({ title, contentImg }) => {
  return (
    <picture className="md:col-start-1 md:row-start-2 ">
      <source
        srcSet={`${contentImg['sm-mob']} 1x, ${contentImg['sm-mob-2x']} 2x`}
        media="(max-width: 767px)"
      />
      <source
        srcSet={`${contentImg['md-tab']} 1x, ${contentImg['md-tab-2x']} 2x`}
        media="(max-width: 1280px)"
      />
      <source
        srcSet={`${contentImg['lg-desktop']} 1x, ${contentImg['lg-desktop-2x']} 2x`}
        media="(min-width: 1280px)"
      />
      <img
      className="max-w-full h-auto mb-3 md:mb-0"
        src={contentImg['lg-desktop']}
        alt={title}                    
        loading='lazy'  
      />
    </picture>
  );
};

export default ServicesContentImgs;