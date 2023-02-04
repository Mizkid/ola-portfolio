import { Header } from "./components/Header"
import { Section1 } from "./components/Section1"
import { Section2 } from "./components/Section2"
import { Section3 } from "./components/Section3"
import { Footer } from "./components/Footer"
import { GlobalStyle } from './components/GlobalStyle';

export const App = () => {
  const navigationData = ["Works", "Blog", "Contact",];
  return (
    <div className="App">
      <GlobalStyle />
      <Header navigationData={navigationData} />
      <body>
        <Section1 />
        <Section2 />
        <Section3 />
      </body>
      <Footer />
    </div>
  );
};

