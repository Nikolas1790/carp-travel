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
import SlideItem from '../slideItem';

const Services: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  const getImageForScreen = (images: any) => {
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
        {Slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideItem
              slide={slide}
              backgroundImage={backgroundImage}
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