import styled from "styled-components";

interface SectionHOCPropsInterface {
  children: any;
  className?: string;
  sectionTitle?: string;
}

const SectionHOC: React.FunctionComponent<SectionHOCPropsInterface> = ({
  children,
  className,
  sectionTitle
}) => {
  return (
    <SectionHOCStyleWrapper className={["container-bs", 'section', `section-${className || ''}`].join(' ')}>
      <div className="container-bs-content">
        <h2 className="section-title">
          {sectionTitle || ''}
        </h2>
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
