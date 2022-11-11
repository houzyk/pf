import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ThemeInterface } from "../themes";
import { ThemeToggle, ThemeTogglePropsInterface } from ".";
import { IsMobileContext } from "../App";

interface NavPropsInterface {
  themeToggleProps?: ThemeTogglePropsInterface;
  navTitle?: string;
  navTitleMobile?: string;
}

const Nav: React.FunctionComponent<NavPropsInterface> = ({
  themeToggleProps,
  navTitle,
  navTitleMobile
}) => {

  const isMobile = useContext(IsMobileContext);
  const navTitleRef = useRef<HTMLHeadingElement>(null);
  const [progressBarLength, setProgressBarLength] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", WindowScrollListener);

    return (() => {
      window.removeEventListener("scroll", WindowScrollListener);
    });
  }, [])

  const WindowScrollListener = () => {
    if (navTitleRef?.current) {
      const navTitleLength = navTitleRef.current?.offsetWidth;
      const pageLength = document?.body?.offsetHeight - window.innerHeight;
      const navTitleToPageRatio = pageLength / navTitleLength;
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
          <ThemeToggle {...themeToggleProps} />
        </div>
      </div>
    </NavStyleWrapper>
  );
}

const NavStyleWrapper = styled.nav<{ theme:ThemeInterface, progressBarLength: number }>`
  &.nav {
    border-bottom: 10px solid ${({ theme }) => theme.outline};
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
        display: inline-block;
        position: relative;
        cursor: pointer;

        &::before {
          content:'';
          height: 5px;
          width: ${({ progressBarLength }) => progressBarLength}%;
          background-color: ${({ theme }) => theme.progressBar};
          position: absolute;
          left: 0;
          bottom: -1px;
        }
      }
    }
  }
`

export type { NavPropsInterface };
export default Nav;
