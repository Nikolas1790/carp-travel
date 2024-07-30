import Image from 'next/image';
import { ContentImg } from '../../lib/utils/utils';
import { FC } from 'react';

interface ServicesContentImgsProps {
  title: string;
  contentImg: ContentImg;
}

const ServicesContentImgs: FC<ServicesContentImgsProps> = ({ title, contentImg }) => {
  return (    
    <Image
      className="h-[213px] max-w-full mb-3 md:col-start-1 md:row-start-2 md:h-[370px]  md:mb-0 xl:h-[429px] "
      src={contentImg['lg-desktop']}
      alt={title}
      objectFit="cover"
      width={607}
      height={429}
      sizes="(max-width: 767px) 100vw, (max-width: 1280px) 100vw, 100vw"
      loading="lazy"
    />
  );
};

export default ServicesContentImgs;