import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global-styles";
import { lightTheme, darkTheme } from "./themes";

import { 
  Nav, 
  Footer
} from "./components";

import { FooterData, 
  NavData, 
  ThemeToggleData 
} from "./data";

const GlobalThemeContext = React.createContext<boolean>(true);
const IsMobileContext = React.createContext<boolean>(true);

const App = () => {

  const [isLightGlobalTheme, setIsLightGlobalTheme] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  
  useEffect(() => {
    setIsMobile(window.innerWidth <= 375);

    window.addEventListener("resize", OnWindowResize);

    return (() => {
      window.removeEventListener("resize", OnWindowResize);
    });
  }, []);

  const OnWindowResize = () => {
    setIsMobile(window.innerWidth <= 375);
  }

  return (
    <ThemeProvider theme={isLightGlobalTheme ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <GlobalThemeContext.Provider value={isLightGlobalTheme}>
        <IsMobileContext.Provider value={isMobile}>
          <Nav
            {...NavData}
            ThemeToggleProps={{
              ...ThemeToggleData,
              onClickCallback: () => setIsLightGlobalTheme(!isLightGlobalTheme)
            }}
          />
          <main className="container-bs">
          </main>
          <Footer {...FooterData}/>
        </IsMobileContext.Provider>
      </GlobalThemeContext.Provider>
    </ThemeProvider>
  );
}

export { GlobalThemeContext, IsMobileContext };
export default App;
