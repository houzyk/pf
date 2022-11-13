import styled from "styled-components";
import { ThemeInterface } from "../../themes";

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

const SectionHOCStyleWrapper = styled.section<{ theme: ThemeInterface }>`
  &.section {
    .section-title {
      position: sticky;
      top: 68px;
      background-color: ${({ theme }) => theme.background};
      z-index: 1;
    }
  }
`

export type { SectionHOCPropsInterface };
export default SectionHOC;
