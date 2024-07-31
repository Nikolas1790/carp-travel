import clsx from 'clsx';
import Slides from '../../lib/data/slider';
import { FC } from 'react';

interface ServicesNamesProps {
  setActiveIndex: (index: number) => void;
  activeIndex: number;
}

const ServicesNames: FC<ServicesNamesProps>= ({ setActiveIndex, activeIndex }) => {
  return ( 
    <ul className=" absolute z-10 top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-[-29%]  flex flex-col gap-4  
        md:-translate-x-[-59%] md:-translate-y-[80%]
        xl:gap-6 xl:-translate-x-[-6%] xl:-translate-y-[60%]">
      {Slides.map(({ id, title }, index) => (
        <li key={id}>
          <button 
            onClick={() => setActiveIndex(index)} 
            className={clsx(
              'flex items-center text-[20px] leading-[17px] uppercase w-[190px] text-left md:text-[22px] md:w-[220px] xl:w-[254px] xl:text-[28px] xl:leading-[24px]',
              index === activeIndex ? 'icon-before' : 'opacity-20 hover:opacity-50 ',
              'transition-margin duration-300 ease-in-out'
            )}
            type='button'
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ServicesNames;