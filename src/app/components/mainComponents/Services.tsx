"use client"

import { FC, useState, useEffect, useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Slides from '../../../lib/data/slider'; 
import Container from '../wrappers/Container';
import services from '../../../lib/data/services.json';
import clsx from 'clsx';



const Services: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');
    const [isDesktop, setIsDesktop] = useState(true);
  const swiperRef = useRef<SwiperClass | null>(null);

  const getImageForScreen = (images: any) => {
    const isRetina = window.devicePixelRatio > 1;
    const width = window.innerWidth;

    if (width <= 768) {
      return isRetina ? images['sm-mob-2x'] : images['sm-mob'];
    } else if (width >= 768 && width <= 1280) {
      return isRetina ? images['md-tab-2x'] : images['md-tab'];
    } else if (width >= 1280) {
      return isRetina ? images['lg-desktop-2x'] : images['lg-desktop'];
    }
  };

  useEffect(() => {
    const updateBackgroundImage = () => {
      const currentSlide = Slides[activeIndex];
      const newImage = getImageForScreen(currentSlide.backgroundImages);
      setBackgroundImage(newImage);
    };

    updateBackgroundImage();

    window.addEventListener('resize', updateBackgroundImage);
    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, [activeIndex]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  


  const getPaddingTop = (id: number) => {
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
  return (
    <section id="hero" className="relative  bg-cover bg-center bg-no-repeat" >
      <Swiper
        modules={[EffectFade, Navigation, Pagination]}
        effect="fade"
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}     
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        initialSlide={activeIndex}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {Slides.map(({ id, contentImg, title, advantages, description }) => (
          <SwiperSlide key={id}>
            <div
              className="h-[851px] flex items-center justify-center bg-cover bg-center bg-no-repeat md:h-[621px] xl:h-[779px] "
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
             <Container>
                <div className="w-[280px] h-[739px] flex flex-col   
                                md:w-[704px] md:h-[480px] md:grid md:grid-cols-[463px_221px] md:grid-rows-[81px_172px_24px_128px] md:gap-y-[25px]  md:gap-x-[20px]
                                xl:w-[1232px] xl:h-[571px] xl:grid-cols-[607px_292px_293px] xl:grid-rows-[114px_242px_168px] ">
                  <h2 className="title text-4xl mb-4 md:mb-0 md:mt-auto md:col-start-1 md:row-start-1 " 
                  >
                    <span>{services.titleSpan}</span> 
                    {services.title}
                  </h2>

                  <p className="text-[43px] font-thin ml-auto w-full text-right mb-4  md:text-[67px]  md:mb-0 md:col-start-2 md:row-start-1 md:text-left xl:text-[98px] xl:self-center"> 0{id}/
                    <span className="opacity-20">0{Slides.length}</span>
                  </p>                  

                  <picture className="max-w-full h-auto mb-3 md:mb-0  md:col-start-1 md:row-start-2 ">
                    <source
                      srcSet={`${contentImg['sm-mob']} 1x, ${contentImg['sm-mob-2x']} 2x`}
                      media="(max-width: 768px)"
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
                      src={contentImg['lg-desktop']}
                      alt={title}                      
                    />
                  </picture>

                  <p className={clsx(
                      'text-xs font-extralight leading-6 tracking-[2.4px] w-full text-right mb-6',
                      'md:mb-0 md:col-start-2 md:row-start-3 md:text-left',
                      'xl:col-start-3 xl:row-start-2 ',
                      isDesktop && getPaddingTop(id)
                    )}
                  >
                    {advantages}
                  </p>

                  <ul className="flex flex-col gap-4  md:col-start-2 md:row-start-2 xl:gap-6">
                    {Slides.map(({ id, title }, index) => (
                      <li key={id}>
                        <button 
                          onClick={() => setActiveIndex(index)} 
                          className={` flex items-center text-[20px] leading-[17px] uppercase w-[190px] text-left md:text-[22px] md:w-auto xl:text-[28px] xl:leading-[24px] ${index === activeIndex ? 'icon-before' : 'opacity-20'}`}
                          type='button'
                        >
                          {title}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <p className=" text mt-auto md:col-start-2 md:row-start-4 md:text-[13px] md:text-justify xl:col-start-3 xl:row-start-3 xl:text-[18px]">{description}</p>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;