import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Raleway";
  src: local("Raleway-VariableFont_wght.ttf");
}

@font-face {
  font-family: "Open Sans";
  src: local("OpenSans-Italic-VariableFont_wdth,wght.ttf"),
}

body {
    margin: 0;
    font-family: 'Raleway';
  }
`;

export default GlobalStyles;
