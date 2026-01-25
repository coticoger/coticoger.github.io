import { createGlobalStyle } from "styled-components";
import OngoeulMitmi from "../src/assets/fonts/OngoeulMitmi.ttf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "OngoeulMitmi";
    src: url(${OngoeulMitmi}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "OngoeulMitmi", sans-serif;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
