import { createGlobalStyle } from 'styled-components';
import ColorVariables from '../styles/variables';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Raleway';
  src: url('/fonts/Raleway-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Open Sans';
  src: url('/fonts/OpenSans-Regular.ttf') format('truetype');
}

html{
    scroll-padding: 5rem;
    scroll-behavior: smooth;
}

body {
    margin: 0;
    background-color: ${ColorVariables.mainWhite};
    font-family: 'Raleway', sans-serif;
  }

  h1, h2, h3, h4, h5{
    font-weight: bold;
    text-transform: uppercase;
  }

  p{
    font-family: 'Open Sans' sans-serif;
  }

  section{
    padding: 5rem 2rem 0px 2rem;
  }
  
  button{
    text-transform: uppercase;
  }
`;

export default GlobalStyles;
