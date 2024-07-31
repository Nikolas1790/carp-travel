import {FC} from 'react';
import Container from '../wrappers/Container';
import hero from '../../../lib/data/hero.json';
import CustomBtn from '../buttons/customBtn';

const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="h-auto bg-cover bg-center bg-no-repeat bg-hero-sm retina:bg-hero-sm-2x
      md:bg-hero-md  md:retina:bg-hero-md-2x
      xl:bg-hero-xl  xl:retina:bg-hero-xl-2x "
      >
      <Container>
        <div className=" pt-[105px] pb-14 md:relative   md:flex  md:flex-row-reverse md:pt-[123px] md:pb-16  xl:pt-[130px] xl:pb-[101px]">
          <div className={"w-[118px] ml-auto mb-6 md:w-[230px] md:mb-0  xl:w-[310px]"}>
            <h2 className={"text-[37px] font-thin leading-[1.21] tracking-[1.66px] md:text-[67px] md:tracking-[8.71px] xl:text-[98px] xl:tracking-0"}>
              <span className={"font-medium leading-[1.21] tracking-normal"}>
                {hero.journeyNumber}
              </span>
              {hero.journeyDays}
            </h2>
            <h3 className={"text-[12px] font-light leading-[1.25] tracking-[9.48px] md:text-[14px] md:tracking-[25.9px] md:leading-[1.21] md:mt-[-8px] xl:text-[16px] xl:tracking-[38.5px] xl:ml-2"}>{hero.journeySubtitle}</h3>
          </div>

          <div className={"mb-6 md:mb-0"}>
            <h1 className={"text-[40px] w-[280px] uppercase font-thin leading-[1.4] tracking-[-1.6px] mb-6 md:w-[426px] md:text-[67px] md:leading-[1.21] md:mb-[68px] xl:w-[646px] xl:text-[98px] xl:mb-[148px] "}>
              <span className={" font-medium"}>
                {hero.titleSpan}
              </span> <br/>
              {hero.title}
            </h1>
            <p className={"text-[10px] font-extralight leading-[1.6] tracking-normal w-[157px] md:w-[262px] md:text-[14px] md:leading-[1.14] xl:w-[608px] xl:text-[16px] xl:leading-[1.5] xl:tracking-[1.44px]"}>{hero.places}</p>
          </div>

          <div className="md:absolute md:right-0 md:bottom-[67px] md:w-[230px] xl:w-[297px] xl:bottom-[101px]">
            <p className={"w-full h-[80px] font-extralight leading-[1.43] tracking-normal mb-7 text-justify  md:h-[120px] md:leading-[1.23] md:mb-[28px] xl:leading-[1.33]"}>
              {hero.text}
            </p>
            <CustomBtn />
          </div>
          
        </div>        
      </Container>
    </section>
  );
};

export default Hero;
