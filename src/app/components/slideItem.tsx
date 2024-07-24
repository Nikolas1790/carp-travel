import { FC } from 'react';
import clsx from 'clsx';
import { SlideItemProps, getPaddingTop } from '@/lib/utils/utils';
import ServicesContentImgs from './servicesContentImgs';
import Container from './wrappers/Container';
import ServicesNames from './servicesNames';
import services from '../../lib/data/services.json';
import Slides from '@/lib/data/slider';



const SlideItem: FC<SlideItemProps> = ({ slide, backgroundImage, activeIndex,isDesktop, setActiveIndex }) => {
  const { id, contentImg, title, advantages, description } = slide;
  return (
    <div
      className="h-[851px] flex items-center justify-center bg-cover bg-center bg-no-repeat md:h-[621px] xl:h-[779px] "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container>
        <div className="w-[280px] h-[739px] flex flex-col   
                        md:w-[704px] md:h-[480px] md:grid md:grid-cols-[463px_221px] md:grid-rows-[81px_172px_24px_128px] md:gap-y-[25px]  md:gap-x-[20px]
                        xl:w-[1232px] xl:h-[571px] xl:grid-cols-[607px_292px_293px] xl:grid-rows-[114px_242px_168px] ">
          <h2 className="title text-4xl mb-4 md:mb-0 md:mt-auto md:col-start-1 md:row-start-1 " >
            <span>{services.titleSpan}</span> 
            {services.title}
          </h2>
          <p className="text-[43px] font-thin ml-auto w-full text-right mb-4  md:text-[67px]  md:mb-0 md:col-start-2 md:row-start-1 md:text-left xl:text-[98px] xl:self-center"> 0{id}/
            <span className="opacity-20">0{Slides.length}</span>
          </p>                
          <ServicesContentImgs title={title} contentImg={contentImg} />
          <p className={clsx(
              'text-xs font-extralight leading-6 tracking-[2.4px] w-full text-right mb-6',
              'md:mb-0 md:col-start-2 md:row-start-3 md:text-left',
              'xl:col-start-3 xl:row-start-2 ',
              isDesktop && getPaddingTop(id)
            )}
          >
            {advantages}
          </p>
          <ServicesNames setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
          <p className=" text mt-auto md:col-start-2 md:row-start-4 md:text-[13px] md:text-justify xl:col-start-3 xl:row-start-3 xl:text-[18px]">{description}</p>
        </div>
      </Container>
    </div>
  );
};

export default SlideItem;