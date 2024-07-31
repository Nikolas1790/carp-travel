"use client"

import {FC} from 'react';

interface GalleryNextPrevBtnsProps {
  gallery: {    
    btnBack: string;  
    btnNext: string;   
  };
}

const GalleryNextPrevBtns: FC<GalleryNextPrevBtnsProps> = ({  gallery }) => {
  return (
    <>
      <button
        type="button"
        className=" prev-button hidden md:block md:absolute md:z-10 md:bottom-[20px] md:left-[50px] md:text-[33px] md:font-thin  xl:bottom-[-10px] xl:left-[228px] hover:scale-105 focus:scale-107 transition" 
      >
        {gallery.btnBack}
      </button>
      <button
        type="button"
        className="next-button hidden md:block md:absolute md:z-10 md:bottom-[20px] md:right-[50px] md:text-[33px] md:font-thin  xl:bottom-[-10px] xl:right-[228px] hover:scale-105 focus:scale-107 transition"                  
      >
        {gallery.btnNext}
      </button>     
    </>      

  );
};

export default GalleryNextPrevBtns;