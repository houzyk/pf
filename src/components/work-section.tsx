import styled from "styled-components";
import { SectionHOC } from "./hoc";
import { Accordion, AccordionPropsInterface } from ".";

interface WorkSectionsPropsInterface {
  sectionTitle?: string;
  accordionsData?: AccordionPropsInterface[];
}

const WorkSection: React.FunctionComponent<WorkSectionsPropsInterface> = ({
  accordionsData,
  sectionTitle
}) => {
  return (
    <SectionHOC 
      className="Work"
      sectionTitle={sectionTitle || ''}
    >
      { !!accordionsData && accordionsData.map((accordionData) => <Accordion {...accordionData}/>) }
    </SectionHOC>
  );
}

export type { WorkSectionsPropsInterface };
export default WorkSection;
