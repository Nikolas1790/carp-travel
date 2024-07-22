import {FC} from 'react';
import Container from '../wrappers/sectionContainer';
import about from '../../../lib/data/about.json';

const About: FC = () => {
  return (
    <section 
      id="about" 
      className="
        h-auto
        bg-cover bg-center bg-no-repeat
        bg-about-sm
        md:bg-about-md md:h-[689px]
        xl:bg-about-xl xl:h-[809px]
        retina:bg-about-sm-2x
        md:retina:bg-about-md-2x
        xl:retina:bg-about-xl-2x
      "
    >
      <Container>
        <div className="paddingY md:relative">
          <div className="mb-10 md:re lative md:flex md:gap-[75px] md:mb-[64px] xl:gap-6 xl:mb-[72px]">
            <h2 className="title mb-2 md:mb-0">
              <span >{about.titleSpan}</span> {'\n'}
              {about.title}
            </h2>
            <div className="w-[180px] md:w-[220px] xl:w-[292px]" >
              <p className="text mb-5 md:mb-4 xl:mb-6">
                <span>{about.mainTextFirstParagraphSpan}</span>
                {about.mainTextFirstParagraph}
              </p>
              <p className="text">
                <span>{about.mainTextSecondParagraphSpan}</span>
                {about.mainTextSecondParagraph}
              </p>
            </div>
          </div>
          


          <div className="w-[184px] ml-auto mb-10 flex flex-col md:absolute md:bottom-[144px] md:left-0 md:w-[210px]  xl:w-[297px] xl:right-0 xl:bottom-[100px]">
            <h3 className="uppercase">{about.advantagesVacationers}</h3>
            <h3 className="uppercase self-end">{about.advantagesActiveTravelers}</h3>
            <p className="text xl:tracking-[2.16px]">{about.advantagesText}</p>
          </div>

          <p className="text md:w-[463px] md:ml-auto xl:w-[605px] xl:mr-auto xl:ml-0">
            <span>{about.summarizeTextSpan}</span>
            {about.summarizeText}
          </p>

        </div>
      </Container>
    </section>
  );
};

export default About;
