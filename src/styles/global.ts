import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    color: #231f20;
    background: #f4f7f6;
    line-height: 1.5em;
    letter-spacing: .3px;
  }

  a {
    color: initial;
    text-decoration: none;
  }
`;

export default GlobalStyle;
