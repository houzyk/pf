import styled from "styled-components";
import { ThemeInterface } from "../themes";

interface ThemeTogglePropsInterface {
  isLightGlobalTheme?: boolean;
  onClickCallback?: any;
  accessibility?: {
    buttonAriaLabel?: string;
  }
}

const ThemeToggle: React.FunctionComponent<ThemeTogglePropsInterface> = ({
  onClickCallback,
  isLightGlobalTheme,
  accessibility
}) => {
  return (
    <ThemeToggleStyleWrapper className="themetoggle">
      <button
        className={["themetoggle-button", isLightGlobalTheme ? '' : 'themetoggle-button_toggled-js'].join(' ')}
        onClick={onClickCallback}
        aria-label={accessibility?.buttonAriaLabel || ''}
      />
    </ThemeToggleStyleWrapper>
  );
}

const ThemeToggleStyleWrapper = styled.div<{ theme: ThemeInterface }>`
  &.themetoggle {
    background-color: ${({ theme }) => theme.outline};
    height: 23px;
    width: 46px;
    border-radius: 23px;

    .themetoggle-button {
      background-color: ${({ theme }) => theme.background};
      height: 23px;
      width: 23px;
      border-radius: 50%;
      border: none;
      transition: transform 0.5s;
      cursor: pointer;

      &.themetoggle-button_toggled-js {
        transform: translateX(23px);
      }
    }
  }
`

export type { ThemeTogglePropsInterface };
export default ThemeToggle;
