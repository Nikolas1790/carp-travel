import {FC} from 'react';
import SectionCareer from '../wrappers/SectionCareer';
import Container from '../wrappers/Container';
import career from '../../../lib/data/career.json';
import CareerWhyUs from '../../../lib/data/careerWhyUs';
// import CareerForm from '../forms/careerForm';
import CareerOpportunityText from '../careerOpportunityText';

const Career: FC = () => {
  return (
    <>
      <SectionCareer>
        <Container>
          <div className="w-[280px] h-full mx-auto  
              md:w-[704px] md:grid md:grid-cols-3 md:grid-rows-[80px_96px_88px_316px] md:gap-x-[20px] 
              xl:w-[1232px] xl:grid-cols-[293px_285px_290px_292px] xl:grid-rows-[128px_83px_380px] xl:gap-x-[24px]  ">
            <h2 className='title mb-6 col-span-2 md:col-start-1 md:row-start-1 md: '><span>{career.titleSpan}</span>  {career.title}</h2>
            <p className='text w-[179px] ml-auto mb-[36px] font-extralight md:w-auto md:text-[13px] md:mb-0 md:leading-[1.54] xl:col-start-4 xl:row-start-1 xl:text-[18px] xl:text-justify xl:leading-[1.33] '>{career.opportunity}</p>
            <h3 className=' text-[30px] uppercase font-extralight ml-[100px] md:col-start-1 md:row-start-2 md:text-right md:ml-0 xl:text-[36px] ' >{career.headerWgyUs}</h3>

            <ul className="text-right  md:col-start-1 md:row-start-3  xl:col-span-2 xl:col-start-1 xl:row-start-3 ">
              {CareerWhyUs.map( i => (
                <li key={i.id} className='w-[181px] text-right mb-4 md:w-auto md:mb-6 last:mb-0 last:md:mb-0 xl:flex xl:items-center xl:gap-6 '>
                  <h4 className='mb-2 xl:w-[293px] '>{i.title}</h4>
                  <p className=' text-[12px] font-extralight xl:text-left xl:w-[285px] '>{i.description}</p>
                </li>
              ))
              }
            </ul>

            <div className=' hidden md:block md:col-start-2 md:row-start-3 xl:col-start-3 xl:row-start-2 '>
              <CareerOpportunityText />
            </div>
          </div>
        </Container>
      </SectionCareer>



      <div className='md:hidden'>   
        <SectionCareer >
          <Container>
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
              <CareerOpportunityText />
              {/* <CareerForm /> */}
            </div>
          </Container>
        </SectionCareer>
      </div>
    </>
  );
};

export default Career;
