import { useContext } from "react";
import styled from "styled-components";
import { ThemeInterface } from "../themes";
import ThemeToggle, { ThemeTogglePropsInterface } from "./themetoggle";
import { IsMobileContext } from "../App";
interface NavPropsInterface {
  ThemeToggleProps?: ThemeTogglePropsInterface;
  navTitle?: string;
  navTitleMobile?: string;
}

const Nav: React.FunctionComponent<NavPropsInterface> = ({
  ThemeToggleProps,
  navTitle,
  navTitleMobile
}) => {

  const isMobile = useContext(IsMobileContext);

  return (
    <NavStyleWrapper className="nav">
      <div className="container-bs">
        <div className="container-bs-content nav-container">
          <h1 className="nav-container_title">
            {isMobile ? navTitleMobile || '' : navTitle || ''}
          </h1>
          <ThemeToggle {...ThemeToggleProps} />
        </div>
      </div>
    </NavStyleWrapper>
  );
}

const NavStyleWrapper = styled.nav<{ theme:ThemeInterface }>`
  &.nav {
    border-bottom: 15px solid ${({ theme }) => theme.outline};
    height: 58px;
    width: 100vw;
    position: fixed;

    .nav-container {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav-container_title {
        transition: color 1s;
      }
    }
  }
`

export type { NavPropsInterface };
export default Nav;
