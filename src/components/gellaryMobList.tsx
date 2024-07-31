import React, { FC } from 'react';
import Image from 'next/image';

import { galleryImgs } from '@/lib/data/gellaryImgs';


const  GalleryImageList: FC = () => {
  return (
    <ul className=" space-y-6 md:hidden">
      {galleryImgs.map((i, index) => (
        <li key={index}>
          <Image  src={i.src} alt={i.alt} layout="responsive" width={280} height={187} className=" " />
        </li>
      ))}
    </ul>
  );
}


export default GalleryImageList;