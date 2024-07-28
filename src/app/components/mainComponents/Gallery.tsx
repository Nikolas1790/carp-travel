"use client"

import {FC,  useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import gallery from '../../../lib/data/gallery.json';
import Container from '../wrappers/Container';
import Image from 'next/image';

const Gallery: FC = () => {
  const [currentImages, setCurrentImages] = useState<string[]>([]);

    useEffect(() => {
    const updateImageSet = () => {
      const screenWidth = window.innerWidth;
      const isRetina = window.devicePixelRatio > 1;
      
      if (screenWidth < 768) {
        setCurrentImages(isRetina ? gallery.images.mobileRetina : gallery.images.mobile);
      } else {
        setCurrentImages(isRetina ? gallery.images.desktopRetina : gallery.images.desktop);
      } 
    };



    updateImageSet();
    window.addEventListener('resize', updateImageSet);

    return () => {
      window.removeEventListener('resize', updateImageSet);
    };
  }, []);

  useEffect(() => {
    console.log("Current images:", currentImages);
  }, [currentImages]);
  
  if (!currentImages.length) {
    return <p>Loading images...</p>;
  }
  return (
    <section 
      id="gallery" 
      className=" h-auto flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gallery-sm retina:bg-gallery-sm-2x
      md:bg-gallery-md md:h-[575px] md:retina:bg-gallery-md-2x
      xl:bg-gallery-xl xl:h-[788px] xl:retina:bg-gallery-xl-2x      
    "
    >
      <Container >
        <div className="paddingY  flex flex-col w-[280px] h-[801px] bg-black bg-opacity-50 md:w-[704px] md:h-[575px] xl:w-[1280px] xl:h-[788px]  ">
          <h2 className='title mb-6 md:mb-[72px] md:mx-auto xl:mx-0' ><span>{gallery.titleSpan}</span> {gallery.title}</h2>

          <Swiper
            modules={[ EffectCoverflow ]}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
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
                  scale: 0.29,
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
                  scale: 0.52, 
                }
              },
            }}
          >
          
            {currentImages.map((src, index) => (
              <SwiperSlide key={index} className='flex justify-center items-center '>   
                <div className="relative  w-[280px] h-[187px] md:right-[96px] md:w-[415px] md:h-[294px] xl:w-[606px] xl:h-[429px]  xl:right-[110px]">
                  <Image src={src} alt={gallery.title} layout="fill" objectFit="cover"  onLoad={() => console.log('Image loaded')} />             
                 </div>
              </SwiperSlide>
            ))} 
            <button
              type="button"
              className="md:absolute md:z-300 md:bottom-0 md:left-[50px] md:text-[33px] md:font-thin  xl:bottom-[-10px] xl:left-[200px] hover:scale-105 focus:scale-107 transition"                  
            >
              {gallery.btnBack}
            </button>
            <button
              type="button"
              className="md:absolute md:z-3 md:bottom-0 md:right-[50px] md:text-[33px] md:font-thin  xl:bottom-[-10px] xl:right-[200px] hover:scale-105 focus:scale-107 transition"                  
            >
              {gallery.btnNext}
            </button>            
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
