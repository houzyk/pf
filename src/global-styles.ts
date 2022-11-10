import { createGlobalStyle} from "styled-components";
import { ThemeInterface } from "./themes";

const GlobalStyles = createGlobalStyle<{theme: ThemeInterface}>`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`

export { GlobalStyles };