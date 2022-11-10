import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global-styles";
import { lightTheme, darkTheme } from "./themes";

import { 
  Nav, 
  Footer, 
  ThemeToggle 
} from "./components";

import { FooterData, 
  NavData, 
  ThemeToggleData 
} from "./data";

const App = () => {

  const [isLightGlobalTheme, setIsLightGlobalTheme] = useState<boolean>(true);

  return (
    <ThemeProvider theme={isLightGlobalTheme ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <ThemeToggle 
        onClickCallback={() => setIsLightGlobalTheme(!isLightGlobalTheme)}
        isLightGlobalTheme={isLightGlobalTheme}
        {...ThemeToggleData}
      />
      <Nav {...NavData}/>
      <Footer {...FooterData}/>
    </ThemeProvider>
  );
}

export default App;
