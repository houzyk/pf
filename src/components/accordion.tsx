import { useRef, useState, useContext } from "react";
import styled from "styled-components";
import { GlobalThemeContext } from "../App"
import { ThemeInterface } from "../themes";

interface AccordionPropsInterface {
  accordionTitle?: string;
  accordionDescriptionParagraph?: string;
  accordionTechParagraph?: string;
  accordionButtonText?: string;
  accordionButtonURL?: string;
  accordionTheme?: string;
}

const Accordion: React.FunctionComponent<AccordionPropsInterface> = ({
  accordionTitle,
  accordionDescriptionParagraph,
  accordionTechParagraph,
  accordionTheme,
  accordionButtonText,
  accordionButtonURL
}) => {

  const isLightGlobalTheme = useContext(GlobalThemeContext);

  const panelDescriptionTextRef = useRef<HTMLParagraphElement>(null);
  const panelTechTextRef = useRef<HTMLParagraphElement>(null);
  const panelAnchorRef = useRef<HTMLAnchorElement>(null);
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

  const OnAccordionClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  }

  return (
    <AccordionStyleWrapper 
      className="accordion"
      isAccordionOpen={isAccordionOpen}
      panelTextLegth={(panelDescriptionTextRef.current?.offsetHeight || 0) + (panelTechTextRef.current?.offsetHeight || 0) +(panelAnchorRef.current?.offsetHeight || 0)}
      accordionTheme={accordionTheme || ''}
      isLightGlobalTheme={isLightGlobalTheme}
    >
      <button 
        className="accordion-button"
        onClick={OnAccordionClick}
      >
        <p>{accordionTitle || ''}</p>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 384 512" 
          height={25} 
          width={25} 
          className="accordion-button-arrow" 
          aria-hidden={true}
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
      </button>
      <div 
        className="accordion-panel"
      >
        <p 
          ref={panelDescriptionTextRef}
          className="accordion-panel_description" 
        >
          {accordionDescriptionParagraph || ''}
        </p>
        <p 
          ref={panelTechTextRef}
          className="accordion-panel_tech" 
        >
          {accordionTechParagraph || ''}
        </p>
        { !!accordionButtonURL && (
          <a 
            href={accordionButtonURL || ''}
            ref={panelAnchorRef}
            className="accordion-panel_visit" 
            target="_blank"
          >
            {accordionButtonText || ''}
          </a>
        )}
      </div>
    </AccordionStyleWrapper>
  );
}

const AccordionStyleWrapper = styled.div<{ isAccordionOpen: boolean, panelTextLegth?: number, theme: ThemeInterface, accordionTheme: string, isLightGlobalTheme: boolean }>`
  &.accordion {
    border: 3px solid ${({ isAccordionOpen, accordionTheme, isLightGlobalTheme, theme }) => isAccordionOpen && isLightGlobalTheme ? accordionTheme : theme.outline};
    transition: border 0.5s;
    margin-bottom: 10px;

    .accordion-button {
      color: ${({ theme }) => theme.text};
      width: 100%;
      height: 50px;
      text-align: left;
      background: none;
      border: none;
      font-size: 1rem;
      font-weight: 900;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (min-width: 992px) {
        height: 90px;
      }

      .accordion-button-arrow {
        fill: ${({ theme }) => theme.outline};
        transition: transform 0.5s;
        transform: rotate(${({ isAccordionOpen }) => isAccordionOpen ? "180deg" : "0deg"});
      }
    }


    .accordion-panel {
      overflow: hidden;
      height: ${({ isAccordionOpen, panelTextLegth }) => isAccordionOpen && panelTextLegth? panelTextLegth + 45 + "px" : "0"};
      transition: height 0.5s;

      .accordion-panel_description, .accordion-panel_tech, .accordion-panel_visit {
        color: ${({ theme }) => theme.text};
        font-weight: 700;
        margin: 10px;

        @media (min-width: 992px) {
          width: 60%;
        }
      }
      
      .accordion-panel_tech {
        margin-bottom: 20px;
      }

      .accordion-panel_visit {
        margin-top: 10px;
        text-decoration: none;
        border: 3px solid ${({ theme }) => theme.outline};
        padding: 4px;
      }
    }
  }
`

export type { AccordionPropsInterface };
export default Accordion;
