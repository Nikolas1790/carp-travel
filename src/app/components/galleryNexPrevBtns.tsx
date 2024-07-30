"use client"

import {FC} from 'react';

interface GalleryNextPrevBtnsProps {
  goPrev: () => void; 
  goNext: () => void; 
  gallery: {    
    btnBack: string;  
    btnNext: string;   
  };
}

const GalleryNextPrevBtns: FC<GalleryNextPrevBtnsProps> = ({ goPrev, goNext, gallery }) => {

  return (
    <>
      <button
        type="button"
        className="md:absolute md:z-300 md:bottom-0 md:left-[50px] md:text-[33px] md:font-thin  xl:bottom-[-10px] xl:left-[200px] hover:scale-105 focus:scale-107 transition"                  
        onClick={goPrev}
      >
        {gallery.btnBack}
      </button>
      <button
        type="button"
        className="md:absolute md:z-3 md:bottom-0 md:right-[50px] md:text-[33px] md:font-thin  xl:bottom-[-10px] xl:right-[200px] hover:scale-105 focus:scale-107 transition"                  
        onClick={goNext}
      >
        {gallery.btnNext}
      </button>     
    </>       

  );
};

export default GalleryNextPrevBtns;