import styled from "styled-components";

interface ThemeTogglePropsInterface {
  onClickcallback?: any;
  buttonText: string;
}

const ThemeToggle: React.FunctionComponent<ThemeTogglePropsInterface> = ({
  onClickcallback,
  buttonText
}) => {
  return (
    <ButtonStyleWrapper 
      onClick={onClickcallback}
    >
      {buttonText || ''}
    </ButtonStyleWrapper>
  );
}

const ButtonStyleWrapper = styled.button`
  
`

export type { ThemeTogglePropsInterface };
export default ThemeToggle;
