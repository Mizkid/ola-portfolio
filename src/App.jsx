import styled from 'styled-components';

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
      <Main>
        <Section1 />
        <Section2 />
        <Section3 />
      </Main>
      <Footer />
    </div>
  );
};

const Main = styled.main`
    display: flex;
    font-family: "heebo";
    font-style: normal;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 40px 0;
    `