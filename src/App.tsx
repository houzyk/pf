import { 
  Nav,
  Footer
} from "./components";

import { 
  FooterData,
  NavData 
} from "./data";

const App = () => {
  return (
    <>
      <Nav {...NavData}/>
      <Footer {...FooterData}/>
    </>
  );
}

export default App;
