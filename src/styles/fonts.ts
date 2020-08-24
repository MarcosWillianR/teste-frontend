import { createGlobalStyle } from 'styled-components';

import GothamBoldWoff from '../assets/fonts/Gotham-Bold.woff';
import GothamBoldWoff2 from '../assets/fonts/Gotham-Bold.woff2';

import GothamBookWoff from '../assets/fonts/Gotham-Book.woff';
import GothamBookWoff2 from '../assets/fonts/Gotham-Book.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Gotham-Bold';
    src: url(${GothamBoldWoff});
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham-Bold';
    src: url(${GothamBoldWoff2});
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham-Book';
    src: url(${GothamBookWoff});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham-Book';
    src: url(${GothamBookWoff2});
    font-weight: 400;
    font-style: normal;
  }
`;
