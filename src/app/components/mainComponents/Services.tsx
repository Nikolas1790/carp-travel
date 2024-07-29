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
import { getImageForScreen } from '../../../lib/utils/utils';

const Services: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const updateBackgroundImage = () => {
      const currentSlide = Slides[activeIndex];
      const newImage = getImageForScreen(currentSlide.backgroundImages, setIsDesktop);
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

  return (
    <section id="services" className="relative  bg-cover bg-center bg-no-repeat" >
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
            className="h-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})`}}>
            <SlideItem
              slide={slide}              
              isDesktop={isDesktop}
              setActiveIndex={setActiveIndex} 
              activeIndex={activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;