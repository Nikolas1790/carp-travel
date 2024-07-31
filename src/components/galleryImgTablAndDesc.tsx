"use client"

import {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import gallery from '../../lib/data/gallery.json';
import Image from 'next/image';
import GalleryNextPrevBtns from './galleryNexPrevBtns';
import { galleryImgs } from '@/lib/data/gellaryImgs';

const GalleryImgsTablAndDesc: FC = () => {
  return (
    <div className=" hidden  md:block md:relative  ">          
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
  );
};

export default GalleryImgsTablAndDesc;
