"use client"

import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Slides from '../../../lib/data/slider'; 
import Container from '../wrappers/sectionContainer';
import services from '../../../lib/data/services.json';

const Services: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="hero" className="relative  bg-cover bg-center bg-no-repeat">
      <Swiper
        modules={[EffectFade, Navigation, Pagination]}
        effect="fade"
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}     
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {Slides.map(({ id, image, contentImg, title, advantages, description }) => (
          <SwiperSlide key={id}>
            <div
              className="h-[851px] flex items-center justify-center bg-cover bg-center bg-no-repeat md:h-[621px] xl:h-[779px]"
              style={{ backgroundImage: `url(${image})` }}
            >
             <Container>
                <div className="                           bg-black bg-opacity-50 ">
                  <h2 className="title text-4xl text-white mb-4"><span>{services.titleSpan}</span> {services.title}</h2>
                  <p> 0 {id}/
                    <span>0{Slides.length}</span>
                  </p>


                  <img src={contentImg} alt={title} className="my-4 max-w-full h-auto" />

                  <p>{advantages}</p>

                  <ul className="flex flex-col md:flex-row md:space-x-4">
                    {Slides.map(({ id, title }, index) => (
                      <li key={id} className="text-white">
                        {index === activeIndex ? '• ' : ''}{title}
                      </li>
                    ))}
                  </ul>

                  <p className="text-white">{description}</p>
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
