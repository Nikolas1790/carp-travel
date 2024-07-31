import {FC} from 'react';

interface SectionCareerProps {
  children: React.ReactNode;
}

const SectionCareer: FC<SectionCareerProps> = ({ children }) => {
  return (
    <section       
      className="paddingY
        h-auto bg-cover bg-center bg-no-repeat bg-career-sm retina:bg-career-sm-2x py-14
        md:bg-career-md md:retina:bg-career-md-2x
        xl:bg-career-xl xl:retina:bg-career-xl-2x "
    >
      {children}
    </section>
  );
};

export default SectionCareer;
