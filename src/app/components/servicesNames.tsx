import Slides from '../../lib/data/slider';
import { FC } from 'react';

interface ServicesNamesProps {
  setActiveIndex: (index: number) => void;
  activeIndex: number;
}

const ServicesNames: FC<ServicesNamesProps>= ({ setActiveIndex, activeIndex }) => {
  return ( 
    <ul className="flex flex-col gap-4  md:col-start-2 md:row-start-2 xl:gap-6">
      {Slides.map(({ id, title }, index) => (
        <li key={id}>
          <button 
            onClick={() => setActiveIndex(index)} 
            className={` flex items-center text-[20px] leading-[17px] uppercase w-[190px] text-left md:text-[22px] md:w-auto xl:text-[28px] xl:leading-[24px] ${index === activeIndex ? 'icon-before' : 'opacity-20'}`}
            type='button'
            tabIndex={0}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ServicesNames;