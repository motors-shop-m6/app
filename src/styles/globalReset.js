import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: #121214;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;
