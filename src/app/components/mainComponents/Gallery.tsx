"use client"

import {FC,  useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import gallery from '../../../lib/data/gallery.json';
import Container from '../wrappers/Container';

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

  return (
    <section 
      id="gallery" 
      className=" h-auto flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gallery-sm retina:bg-gallery-sm-2x
      md:bg-gallery-md md:h-[575px] md:retina:bg-gallery-md-2x
      xl:bg-gallery-xl xl:h-[788px] xl:retina:bg-gallery-xl-2x      
    "
    >
      <Container >
        <div className="paddingY  flex flex-col w-[280px] h-[801px] bg-black bg-opacity-50 md:w-[704px] md:h-[575px] ">
          <h2 className='title mb-6 md:mb-[72px] md:mx-auto' ><span>{gallery.titleSpan}</span> {gallery.title}</h2>

          <Swiper
            modules={[Navigation, Pagination, A11y, EffectCoverflow ]}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false
            }}
            loop
            slidesPerView={3}
            spaceBetween={24}

            navigation
            // pagination={{ clickable: true }}
            className="mySwiper"
            direction= 'vertical'
            breakpoints={{
              768: {
                slidesPerView: 3,
                direction: 'horizontal',
                coverflowEffect: {
                  rotate: 0,
                  stretch: -44,
                  depth: 200,
                  modifier: 1,
                  scale: 0.29,
                },
              },
              1280: {
                slidesPerView: 3,
                direction: 'horizontal',
                coverflowEffect: {
                  rotate: 0,
                  stretch: -52,
                  depth: 200,
                  modifier: 1,
                  scale: 0.29, 
                }
              },
            }}
          >
          
            {currentImages.map((src, index) => (
              <SwiperSlide key={index} className='flex justify-center items-center '>   
                               
                  <img src={src} alt="Gallery image" className="w-[280px] h-full object-cover md:w-[415px]"/>             
                     
              </SwiperSlide>
            ))} 
            
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
