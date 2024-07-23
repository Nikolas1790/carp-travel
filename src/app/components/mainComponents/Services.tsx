"use client"

import { FC, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Slides from '../../../lib/data/slider'; 
import Container from '../wrappers/Container';
import services from '../../../lib/data/services.json';

const Services: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');

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
    const currentSlide = Slides[activeIndex];
    const newImage = getImageForScreen(currentSlide.backgroundImages);
    setBackgroundImage(newImage);
  }, []);


  return (
    <section id="hero" className="relative  bg-cover bg-center bg-no-repeat" >
      <Swiper
        modules={[EffectFade, Navigation, Pagination]}
        effect="fade"
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}     
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {Slides.map(({ id, contentImg, title, advantages, description }) => (
          <SwiperSlide key={id}>
            <div
              className="h-[851px] flex items-center justify-center bg-cover bg-center bg-no-repeat md:h-[621px] xl:h-[779px]"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
             <Container>
                <div className="w-[280px] h-[739px] flex flex-col                        ">
                  <h2 className="title text-4xl text-white mb-4"><span>{services.titleSpan}</span> {services.title}</h2>

                  <p className="text-[43px] font-thin ml-auto w-full text-right mb-4"> 0{id}/
                    <span className="opacity-20">0{Slides.length}</span>
                  </p>                  

                  <picture>
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
                      className="max-w-full h-auto mb-3"
                    />
                  </picture>

                  <p className="text-xs font-extralight leading-6 tracking-[2.4px] ml-auto w-full text-right mb-6">{advantages}</p>

                  <ul className="flex flex-col gap-4 md:flex-row md:space-x-4">
                    {Slides.map(({ id, title }, index) => (
                      <li key={id} className={` flex items-center text-[20px] leading-[17px] uppercase w-[190px] ${index === activeIndex ? 'icon-before' : 'opacity-20'}`}>
                        {title}
                      </li>
                    ))}
                  </ul>

                  <p className="text-white text mt-auto">{description}</p>
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