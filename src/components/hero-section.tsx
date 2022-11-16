import styled from "styled-components";
import { SectionHOC } from "./hoc";


const HeroSection: React.FunctionComponent = () => {

  return (
    <SectionHOC 
      className="hero-section" 
      sectionTitle="Hello, World!"
    >
        <HeroSectionStyleWrapper className="hero-section-container">
          <p className="hero-section-container-text">
            I'm A Mauritian <span className="hero-section-container-text-job">Front-End Engineer</span> Focused On Building <span className="hero-section-container-text-props">Scalable, [De]centralised && International</span> Web Apps.
          </p>
        </HeroSectionStyleWrapper>
    </SectionHOC>
  );
}

const HeroSectionStyleWrapper = styled.div<{ theme: any }>`
  &.hero-section-container {

    .hero-section-container-text {
      font-size: 15vw;
      margin: 0;
      text-align: justify;

      .hero-section-container-text-job {
        font-style: italic;
      }

      .hero-section-container-text-props {
        background-color: ${({theme}) => theme.outline};
        color: ${({theme}) => theme.background};
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
          color: ${({ theme }) => theme.progressBar};
          background-color: ${({theme}) => theme.background};
        }
      }

      @media (min-width: 768px) {
        font-size: 10vw;
      }
      @media (min-width: 1024px) {
        font-size: 7vw;
      }
      @media (min-width: 1440px) {
        font-size: 5rem;
      }
    }
  }
`

export default HeroSection;