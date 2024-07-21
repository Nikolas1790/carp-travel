import {FC} from 'react';
import Container from '../wrappers/sectionContainer';
import hero from '../../../lib/data/hero.json';
import CustomBtn from '../buttons/customBtn';

const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="
      h-[642px] 
      bg-cover bg-center bg-no-repeat
      bg-hero-sm
      md:bg-hero-md
      xl:bg-hero-xl
      retina:bg-hero-sm-2x
      md:retina:bg-hero-md-2x
      xl:retina:bg-hero-xl-2x
    "
      >
      <Container>
        <div className=" h-[642px] pt-[105px] pb-14  md:pt-[123px] md:pb-16  xl:pt-[106px] xl:pb-20">
          <div className={"w-[118px] ml-auto mb-6"}>
            <h2 className={"text-[37px] font-thin leading-[1.21] tracking-[1.66px]"}>
              <span className={"font-medium leading-[1.21] tracking-normal"}>
                {hero.journeyNumber}
              </span>
              {hero.journeyDays}
            </h2>
            <h3 className={"text-[12px] font-light leading-[1.25] tracking-[9.48px]"}>{hero.journeySubtitle}</h3>
          </div>

          <div className={" mb-6"}>
            <h1 className={"text-[40px] w-[280px] uppercase font-thin leading-[1.4] tracking-[-1.6px] mb-6"}>
              <span className={" font-medium"}>
                {hero.titleSpan}
              </span> <br/>
              {hero.title}
            </h1>
            <p className={"text-[10px] font-extralight leading-[1.6] tracking-normal w-[157px]"}>{hero.places}</p>
          </div>

          <div>
            <p className={"w-full h-[80px] font-extralight leading-[1.43] tracking-normal mb-6 text-justify"}>
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
