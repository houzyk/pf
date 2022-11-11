import { useContext, useEffect, useRef, useState } from "react";
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
  const navTitleRef = useRef<HTMLHeadingElement>(null);
  const [progressBarLength, setProgressBarLength] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", WindowScrollListner);

    return (() => {
      window.removeEventListener("scroll", WindowScrollListner);
    });
  }, [])

  const WindowScrollListner = () => {
    if (navTitleRef?.current) {
      const navTitleLength = navTitleRef.current?.offsetWidth;
      const pageLength = document?.body?.offsetHeight - window.innerHeight;
      const navTitleToPageRatio =  pageLength / navTitleLength;
      const scrollValueRatio = window.scrollY / navTitleToPageRatio;
      const progressBarValue = scrollValueRatio / navTitleLength;
      setProgressBarLength(progressBarValue * 100);
    }
  }

  const ScrollToTop = () => {
    window.scroll({
      behavior: "smooth",
      top: 0
    });
  }

  return (
    <NavStyleWrapper 
      className="nav" 
      progressBarLength={progressBarLength}
    >
      <div className="container-bs">
        <div className="container-bs-content nav-container">
          <h1 
            className="nav-container_title" 
            ref={navTitleRef}
            tabIndex={0}
            onClick={ScrollToTop}
          >
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
