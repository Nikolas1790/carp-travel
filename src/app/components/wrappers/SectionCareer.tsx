import {FC} from 'react';

interface SectionCareerProps {
  children: React.ReactNode;
}

const SectionCareer: FC<SectionCareerProps> = ({ children }) => {
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
      {children}
    </section>
  );
};

export default SectionCareer;
