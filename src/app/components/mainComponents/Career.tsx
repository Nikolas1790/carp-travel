import {FC} from 'react';
import SectionCareer from '../wrappers/SectionCareer';

const Career: FC = () => {
  return (
    <>
    <SectionCareer>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        Career
      </div>
    </SectionCareer>
        <SectionCareer>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          Career
        </div>
      </SectionCareer>
    </>
  );
};

export default Career;
