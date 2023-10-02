import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #f4f7f6;
    color: #231f20;
    line-height: 1.5em;
    letter-spacing: .3px;
  }
`;
