"use client"

import { FC, useState, useEffect, useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade } from 'swiper/modules';
import Slides from '../../../lib/data/slider'; 
import SlideItem from '../slideItem';
import ServicesNames from '../servicesNames';

const Services: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <section id="services" className="relative bg-cover bg-center bg-no-repeat" >
      <Swiper
      
        modules={[EffectFade]}
        effect="fade"
        slidesPerView={1}        
        autoplay={{ delay: 3000 }}     
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        initialSlide={activeIndex}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {Slides.map((slide) => (
          <SwiperSlide 
            key={slide.id} 

            className="h-auto bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${slide.backgroundImages['lg-desktop']})` }} >
            <SlideItem
              slide={slide}              
              isDesktop={isDesktop}
              setActiveIndex={setActiveIndex} 
              activeIndex={activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ServicesNames setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
    </section>
  );  
};

export default Services;