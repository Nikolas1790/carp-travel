"use client"

import {FC} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import gallery from '../../lib/data/gallery.json';
import Container from '../wrappers/Container';
import GalleryImageList from '../gellaryMobList';
import GalleryImgsTablAndDesc from '../galleryImgTablAndDesc';

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
          <GalleryImgsTablAndDesc />
        </div>
      </Container>
    </section>
  );
};

export default Gallery;