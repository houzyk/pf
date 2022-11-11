import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "./themes";

const GlobalStyles = createGlobalStyle<{theme: ThemeInterface}>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  /* Bootstrap */
  .container-bs {
    width: 100%;
    padding-right: calc(1.5rem * 0.5);
    padding-left: calc(0 * 0.5);
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }
    
    @media (min-width: 1400px) {
      max-width: 1320px;
    }
  }

  .container-bs-content {
    margin-left: 10px;
    margin-right: 10px;
  }
`

export { GlobalStyles };