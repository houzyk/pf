import styled from "styled-components";
import { AccordionPropsInterface } from ".";

interface AccorionAltPropsInterface {
  accordionsData?: AccordionPropsInterface[];
}

const AccordionAlt: React.FunctionComponent<AccorionAltPropsInterface> = ({

}) => {
  return (
    <AccordionAltStyleWrapper className="accordion-alt">
    </AccordionAltStyleWrapper>
  );
}

const AccordionAltStyleWrapper = styled.div`
  &.accordion-alt {
    height: 440px;
  }
`
export type { AccorionAltPropsInterface };
export default AccordionAlt;
