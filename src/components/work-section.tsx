import React, { useContext } from "react";
import { SectionHOC } from "./hoc";
import { Accordion, AccordionAlt, AccordionPropsInterface } from ".";
import { IsMobileContext } from "../App";

interface WorkSectionsPropsInterface {
  sectionTitle?: string;
  accordionsData?: AccordionPropsInterface[];
}

const WorkSection: React.FunctionComponent<WorkSectionsPropsInterface> = ({
  accordionsData,
  sectionTitle
}) => {

  const isMobile = useContext(IsMobileContext);

  const RenderAccordion = (accordionsData_: AccordionPropsInterface[]) => {
    if (isMobile) {
      return (
        <React.Fragment>
          {accordionsData_.map((accordionData, index) => <Accordion {...accordionData} key={index}/>)}
        </React.Fragment>
      );
    }
    return (
      <AccordionAlt accordionsData={accordionsData_}/>
    );
  }

  return (
    <SectionHOC 
      className="Work"
      sectionTitle={sectionTitle || ''}
    >
      { !!accordionsData && RenderAccordion(accordionsData) }
    </SectionHOC>
  );
}

export type { WorkSectionsPropsInterface };
export default WorkSection;
