"use client"

import {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import gallery from '../../../lib/data/gallery.json';
import Container from '../wrappers/Container';
import Image from 'next/image';
import GalleryNextPrevBtns from '../galleryNexPrevBtns';
import { galleryImgs } from '@/lib/data/gellaryImgs';
import GalleryImageList from '../gellaryMobList';

const Gallery: FC = () => {
  return (
    <section 
      id="gallery" 
      className=" h-auto flex items-center justify-center bg-black bg-opacity-50 bg-cover bg-center bg-no-repeat bg-gallery-sm retina:bg-gallery-sm-2x
      md:bg-gallery-md md:h-[575px] md:retina:bg-gallery-md-2x
      xl:bg-gallery-xl xl:h-[788px] xl:retina:bg-gallery-xl-2x"
    >
      <Container >
        <div className="paddingY relative  flex flex-col w-[280px] h-[801px] md:w-[704px] md:h-[575px] xl:w-[1280px] xl:h-[788px]  ">
          <h2 className='title mb-6 md:mb-[72px] md:mx-auto xl:mx-0'><span>{gallery.titleSpan}</span> {gallery.title}</h2>
          
          <GalleryImageList />
          <Swiper
            modules={[ EffectCoverflow, Navigation ]}
            effect={'coverflow'}
            navigation={{
              prevEl: '.prev-button',
              nextEl: '.next-button', 
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            }}
            loop={true}
            centeredSlides={true}
            initialSlide={1}
            grabCursor={true}
            slidesPerView={3}
            spaceBetween={24}
            pagination={{ clickable: true }}
            className="mySwiper"
            direction= 'vertical'                     
            breakpoints={{
              320: {
                centeredSlides: false, 
              },
              768: {
                direction: 'horizontal',
                centeredSlides: true, 
                coverflowEffect: {
                  rotate: 0,
                  stretch: -80,
                  depth: 200,
                  modifier: 1,
                  scale: 0.4,
                },
              },
              1280: {
                direction: 'horizontal',
                centeredSlides: true, 
                coverflowEffect: {
                  rotate: 0,
                  stretch: -110,
                  depth: 200,
                  modifier: 1,
                  scale: 0.55, 
                }
              },
            }}
          >          
            {[...galleryImgs, ...galleryImgs ].map((i, index) => (
              <SwiperSlide key={index} className='flex justify-center items-center ' >   
                <div className="relative w-[280px] h-[187px] md:right-[96px] md:w-[415px] md:h-[294px] xl:w-[606px] xl:h-[429px]  xl:right-[100px] ">
                  <Image src={i.src} alt={i.alt} layout="fill" objectFit="cover" loading="lazy"  />             
                </div>
              </SwiperSlide>
            ))}             
          </Swiper>
          <GalleryNextPrevBtns gallery={gallery} />
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
