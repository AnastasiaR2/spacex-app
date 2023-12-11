import { createGlobalStyle } from 'styled-components';

import LatoLightWoff from '~/fonts/lato-light.woff';
import LatoLightWoff2 from '~/fonts/lato-light.woff2';
import LatoMediumWoff from '~/fonts/lato-medium.woff';
import LatoMediumWoff2 from '~/fonts/lato-medium.woff2';
import SyneBoldWoff from '~/fonts/syne-bold.woff';
import SyneBoldWoff2 from '~/fonts/syne-bold.woff2';
import SyneExtraBoldWoff from '~/fonts/syne-extra-bold.woff';
import SyneExtraBoldWoff2 from '~/fonts/syne-extra-bold.woff2';
import SyneSemiBoldWoff from '~/fonts/syne-semi-bold.woff';
import SyneSemiBoldWoff2 from '~/fonts/syne-semi-bold.woff2';

const GlobalStyle = createGlobalStyle`

  :root {
    --white: #FFFFFF;
    --black: #000000;
    --black-25: rgba(0, 0, 0, 25%);
    --light-gray: #ECECEC;
    --dark-gray: #1E1E1E;
    --dark-gray-48: rgba(30, 30, 30, 48%);
    --blue: #D3EAFF;
    --dark-blue: #556B84;
    --pink: #DD377D;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  body {
  min-height: 100vh;

  @font-face {
  font-weight: 300;
  font-family: 'Lato';
  font-style: normal;
  font-display: swap;
  src:
    url(${LatoLightWoff2}) format("woff2"),
    url(${LatoLightWoff}) format("woff");
  }

  @font-face {
    font-weight: 500;
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    src:
      url(${LatoMediumWoff2}) format("woff2"),
      url(${LatoMediumWoff}) format("woff");
  }

  @font-face {
    font-weight: 600;
    font-family: 'Syne';
    font-style: normal;
    font-display: swap;
    src:
      url(${SyneBoldWoff2}) format("woff2"),
      url(${SyneBoldWoff}) format("woff");
  }

  @font-face {
    font-weight: 700;
    font-family: 'Syne';
    font-style: normal;
    font-display: swap;
    src:
      url(${SyneExtraBoldWoff2}) format("woff2"),
      url(${SyneExtraBoldWoff}) format("woff");
  }

  @font-face {
    font-weight: 800;
    font-family: 'Syne';
    font-style: normal;
    font-display: swap;
    src:
      url(${SyneSemiBoldWoff2}) format("woff2"),
      url(${SyneSemiBoldWoff}) format("woff");
  }
}
`;

export default GlobalStyle;
