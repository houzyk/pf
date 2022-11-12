import styled from "styled-components";
import { SectionHOC } from "./hoc";
import { Accordion, AccordionPropsInterface } from ".";

interface WorkSectionsPropsInterface {
  accordionsData?: AccordionPropsInterface[];
}

const WorkSection: React.FunctionComponent<WorkSectionsPropsInterface> = ({
  accordionsData
}) => {
  return (
    <SectionHOC 
      className="Work"
      sectionTitle="Stuff I've Worked On"
    >
      { !!accordionsData && accordionsData.map((accordionData) => <Accordion {...accordionData}/>) }
    </SectionHOC>
  );
}

export type { WorkSectionsPropsInterface };
export default WorkSection;
