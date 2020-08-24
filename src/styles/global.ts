import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    background: #FAFBFF;
    -webkit-font-smoothing: antialiased;
    color: #3E4157;
  }
  body, input, button {
    font-family: 'Gotham-Book', serif;
    font-size: 13px;
  }
  button {
    cursor: pointer;
  }
`;
