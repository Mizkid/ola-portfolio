import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`

body {
    background: #fff;
}

.App{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    margin: 0 auto;
    font-family: "heebo";
    font-style: normal;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 0 auto;
    width: 1200px;
    
    @media (max-width: 500px) {
        max-width: 500px;

    }
}

:root {
    --bg-color: white;
    --text-color: black;
    --text-color-light: rgb(182, 179, 179);
  }
`;

