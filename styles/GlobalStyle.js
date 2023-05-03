import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Bebas Neue';
    background-color: #145A32;
  }
`;
