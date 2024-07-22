import {FC} from 'react';

const About: FC = () => {
  return (
    <section 
      id="about" 
      className="
        h-[873px] 
        bg-cover bg-center bg-no-repeat
        bg-about-sm
        md:bg-about-md md:h-[697px]
        xl:bg-about-xl xl:h-[824px]
        retina:bg-about-sm-2x
        md:retina:bg-about-md-2x
        xl:retina:bg-about-xl-2x
      "
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        About
      </div>
    </section>
  );
};

export default About;
