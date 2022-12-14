import { createGlobalStyle } from 'styled-components';
import ColorVariables from '../styles/variables';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Raleway";
  src: local("Raleway-VariableFont_wght.ttf");
}

@font-face {
  font-family: "Open Sans";
  src: local("OpenSans-Italic-VariableFont_wdth,wght.ttf"),
}

html{
    scroll-padding: 5rem;
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: 'Raleway';
    background-color: ${ColorVariables.mainWhite};

  }

  h1, h2, h3, h4, h5{
    font-weight: bold;
    text-transform: uppercase;
  }

  p{
    font-family: 'Open Sans';
  }

  section{
    padding: 5rem 2rem 0px 2rem;
  }
  
  button{
    text-transform: uppercase;
  }
`;

export default GlobalStyles;
