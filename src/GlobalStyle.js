import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: sans-serif;
}`;

export default GlobalStyle;
