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
        md:bg-about-md md:h-[697px]
        xl:bg-about-xl xl:h-[824px]
        retina:bg-about-sm-2x
        md:retina:bg-about-md-2x
        xl:retina:bg-about-xl-2x
      "
    >
      <Container>
        <div className="py-14">
          <div className="mb-10">
            <h2 className="title mb-2">
              <span >{about.titleSpan}</span> {'\n'}
              {about.title}
            </h2>
            <div className="w-[180px]">
              <p className="text mb-5">
                <span>{about.mainTextFirstParagraphSpan}</span>
                {about.mainTextFirstParagraph}
              </p>
              <p className="text">
                <span>{about.mainTextSecondParagraphSpan}</span>
                {about.mainTextSecondParagraph}
              </p>
            </div>
          </div>
          


          <div className="w-[184px] ml-auto mb-10 flex flex-col">
            <h3 className="uppercase">{about.advantagesVacationers}</h3>
            <h3 className="uppercase self-end">{about.advantagesActiveTravelers}</h3>
            <p className="text">{about.advantagesText}</p>
          </div>

          <p className="text">
            <span>{about.summarizeTextSpan}</span>
            {about.summarizeText}
          </p>

        </div>
      </Container>
    </section>
  );
};

export default About;
