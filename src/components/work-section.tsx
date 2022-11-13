import { useContext } from "react";
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

  return (
    <SectionHOC 
      className="Work"
      sectionTitle={sectionTitle || ''}
    >
      { !!accordionsData && accordionsData.map((accordionData) => (
        isMobile ? <Accordion {...accordionData}/> : <AccordionAlt {...accordionData}/>
      ))}
    </SectionHOC>
  );
}

export type { WorkSectionsPropsInterface };
export default WorkSection;
