"use client"

import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Slides from '../../../lib/data/slider'; // Импортируйте ваши данные слайда
import Container from '../wrappers/sectionContainer';

const Services: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="hero" className="relative h-[642px] bg-cover bg-center bg-no-repeat">
      <Swiper
        modules={[EffectFade, Navigation, Pagination]}
        effect="fade"
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {Slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <Container>
                <div className="text-center p-4 bg-black bg-opacity-50 rounded">
                  <h2 className="text-4xl text-white mb-4">{slide.callToAction}</h2>
                  <p className="text-white">{slide.description}</p>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        #hero {
          background-image: url(${Slides[activeIndex].image});
        }
      `}</style>
    </section>
  );
};

export default Services;
