import { useState, useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { GlobalThemeContext } from "../App"
import { ThemeInterface } from "../themes";
import { AccordionPropsInterface } from ".";

interface AccorionAltPropsInterface {
  accordionsData: AccordionPropsInterface[];
}

const AccordionAlt: React.FunctionComponent<AccorionAltPropsInterface> = ({
  accordionsData
}) => {

  const isLightGlobalTheme = useContext(GlobalThemeContext);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [accordionAltLength, setAccordionAltLength] = useState<number>(0);

  const descriptionTextRef = useRef<HTMLParagraphElement>(null);
  const techTextRef = useRef<HTMLParagraphElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.addEventListener("resize", ChangeAccordionAltLength);

    return (() => {
      window.removeEventListener("resize", ChangeAccordionAltLength);
    });
  }, []);

  useEffect(() => {
    ChangeAccordionAltLength();
  }, [currentProjectIndex]);

  const ChangeAccordionAltLength = () => {
    const computedAccordionAltLength = ComputeAccordionAltLength();
    setAccordionAltLength(computedAccordionAltLength);
  }

  const ComputeAccordionAltLength = () => {
    const titleElHeight = GetElementTotalHeight(titleRef?.current);
    const techElHeight = GetElementTotalHeight(techTextRef?.current);
    const descriptionElHeight = GetElementTotalHeight(descriptionTextRef?.current);

    const mainTextBoxLength = (anchorRef?.current?.offsetHeight || 0) + titleElHeight + techElHeight;

    if (descriptionElHeight >= mainTextBoxLength) {
      return descriptionElHeight;
    } else {
      return mainTextBoxLength;
    }
  }

  const GetElementTotalHeight = (ref_: any) => {
    let result = ref_?.offsetHeight || 0;
    result = result + parseInt(window?.getComputedStyle(ref_ as Element)?.getPropertyValue('margin-top'));
    result = result + parseInt(window?.getComputedStyle(ref_ as Element)?.getPropertyValue('margin-bottom'));
    return result;
  }

  const MoveToNextProject = () => {
    setCurrentProjectIndex(currentProjectIndex + 1);
  }

  const MoveToPreviousProject = () => {
    setCurrentProjectIndex(currentProjectIndex - 1);
  }

  return (
    <AccordionAltStyleWrapper 
      className="accordion-alt"
      accordionTheme={accordionsData[currentProjectIndex].accordionTheme || ''}
      isLightGlobalTheme={isLightGlobalTheme}
      accordionAltLength={accordionAltLength}
    >
      <div className="accordion-alt-buttons-container">
        <button 
          className="accordion-alt-button" 
          disabled={currentProjectIndex <= 0} 
          onClick={MoveToPreviousProject}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512" 
            height={25} 
            width={25} 
            aria-hidden={true} 
            className="accordion-alt-button-arrow"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
        </button>
        <button 
          className="accordion-alt-button" 
          disabled={currentProjectIndex >= accordionsData?.length - 1} 
          onClick={MoveToNextProject}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512" 
            height={25} 
            width={25} 
            aria-hidden={true} 
            className="accordion-alt-button-arrow"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
          </svg>
        </button>
      </div>
      <div className="accordion-alt-content-container">
        <div className="accordion-alt-content-main">
          <h3 
            className="accordion-alt-content-main_title" 
            ref={titleRef}
          >
            {accordionsData && accordionsData[currentProjectIndex]?.accordionTitle || ''}
          </h3>
          <p 
            className="accordion-alt-content-main_tech" 
            ref={techTextRef}
          >
            {accordionsData && accordionsData[currentProjectIndex]?.accordionTechParagraph || ''}
          </p>
          { !!accordionsData[currentProjectIndex]?.accordionButtonURL && (
            <a 
              className="accordion-alt-content-main_visit-button" 
              target="_blank"
              href={accordionsData && accordionsData[currentProjectIndex]?.accordionButtonURL || ''}
              ref={anchorRef}
            >
              {accordionsData && accordionsData[currentProjectIndex]?.accordionButtonText || ''}
            </a>
          )}
        </div>
        <div className="accordion-alt-content-description">
          <p ref={descriptionTextRef}>
            {accordionsData && accordionsData[currentProjectIndex]?.accordionDescriptionParagraph || ''}
          </p>
        </div>
      </div>
    </AccordionAltStyleWrapper>
  );
}

const AccordionAltStyleWrapper = styled.div<{ theme: ThemeInterface, accordionTheme: string,  isLightGlobalTheme: boolean, accordionAltLength: number}>`
  &.accordion-alt {
    border: 3px solid ${({ theme }) => theme.outline};
    color: ${({ theme }) => theme.text};
    padding: 0;
    height: ${({ accordionAltLength }) => `${accordionAltLength + 120}px`};
    transition: height 0.5s;

    .accordion-alt-buttons-container {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: right;
      padding: 0;
      border-bottom: 10px solid ${({ accordionTheme }) =>  accordionTheme };
      transition: border-bottom 0.5s;

      .accordion-alt-button {
        border: 3px solid ${({ theme }) => theme.outline};
        background-color: ${({ theme }) => theme.background};
        margin-right: 10px;
        height: 60px;
        width: 60px;
        cursor: pointer;

        &:disabled {
          opacity: 0.5;
        }

        .accordion-alt-button-arrow {
          fill: ${({ theme }) => theme.outline};
        }
      }
    }

    .accordion-alt-content-container {
      display: flex;

      .accordion-alt-content-main {
        width: 50%;
        padding-left: 30px;
        padding-right: 30px;

        .accordion-alt-content-main_title {
          font-size: 2.5rem;
        }

        .accordion-alt-content-main_tech {
          margin-bottom: 30px;
        }

        .accordion-alt-content-main_visit-button {
          text-decoration: none;
          color: ${({ theme }) => theme.text};
          border: 3px solid ${({ theme }) => theme.outline};
          padding: 4px;
          cursor: pointer;
        }
      }

      .accordion-alt-content-description {
        width: 50%;
        padding-top: 40px;
        padding-left: 30px;
        padding-right: 30px;
      }
    }
  }
`
export type { AccorionAltPropsInterface };
export default AccordionAlt;
