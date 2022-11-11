import styled from "styled-components";

interface SectionHOCPropsInterface {
  children: any;
  className?: string;
}

const SectionHOC: React.FunctionComponent<SectionHOCPropsInterface> = ({
  children,
  className
}) => {
  return (
    <SectionHOCStyleWrapper className={["container-bs", 'section', `section-${className || ''}`].join(' ')}>
      <div className="container-bs-content">
        {children}
      </div>
    </SectionHOCStyleWrapper>
  );
}

const SectionHOCStyleWrapper = styled.section`
  &.section {
    
  }
`

export type { SectionHOCPropsInterface };
export default SectionHOC;
