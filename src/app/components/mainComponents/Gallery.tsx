import {FC} from 'react';

const Gallery: FC = () => {
  return (
    <section 
      id="gallery" 
      className="
      h-[801px] 
      bg-cover bg-center bg-no-repeat
      bg-gallery-sm
      md:bg-gallery-md md:h-[575px]
      xl:bg-gallery-xl xl:h-[788px]
      retina:bg-gallery-sm-2x
      md:retina:bg-gallery-md-2x
      xl:retina:bg-gallery-xl-2x
    "
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        Gallery
      </div>
    </section>
  );
};

export default Gallery;
