import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #a976f7; 
}
html {
box-sizing: border-box;
}
*, *:before, *:after {
box-sizing: inherit;
}

body {
  /* background-image: url(../images/space.jpg) ; */

  font-family: 'Open Sans', sans-serif;
  
}
#modal-root {
  position: relative;
}

`;
