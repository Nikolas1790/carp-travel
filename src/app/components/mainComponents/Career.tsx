import {FC} from 'react';

const Career: FC = () => {
  return (
    <section 
      id="career" 
      className="
      h-[800px] 
      bg-cover bg-center bg-no-repeat
      bg-career-sm
      md:bg-career-md md:h-[720px]
      xl:bg-career-xl xl:h-[818px]
      retina:bg-career-sm-2x
      md:retina:bg-career-md-2x
      xl:retina:bg-career-xl-2x
    "
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        Career
      </div>
    </section>
  );
};

export default Career;
