import styled from "styled-components";
import { AccordionPropsInterface } from ".";


const AccordionAlt: React.FunctionComponent<AccordionPropsInterface> = ({
  accordionTitle,
  accordionDescriptionParagraph,
  accordionTechParagraph,
  accordionTheme,
  accordionButtonText,
  accordionButtonURL
}) => {
  return (
    <AccordionAltStyleWrapper>
    </AccordionAltStyleWrapper>
  );
}

const AccordionAltStyleWrapper = styled.div`
  
`

export default AccordionAlt;
