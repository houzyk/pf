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
      <ThemeToggle 
        onClickCallback={() => setIsLightGlobalTheme(!isLightGlobalTheme)}
        isLightGlobalTheme={isLightGlobalTheme}
        {...ThemeToggleData}
      />
      <Nav {...NavData}/>
      <main className="container-bs">
      </main>
      <Footer {...FooterData}/>
    </ThemeProvider>
  );
}

export default App;
