import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body {
    background: #fff;
}

.App{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
}

:root {
    --bg-color: white;
    --text-color: black;
    --text-color-light: rgb(182, 179, 179);
  }
`;