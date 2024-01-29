import { css } from '@emotion/react'
import "@fontsource-variable/raleway"
import '@fontsource-variable/league-gothic';
import { Global } from '@emotion/react';
import '@fontsource-variable/inter-tight';

//import { colors } from 'styles.colors'
// import AvenirStd from '../fonts/AvenirLTStd-Roman.otf'
// import AvenirBlack from '../fonts/AvenirLTStd-Black.otf'



// const Fonts = () => (
//   <Global
//     styles={`
//       /* latin */
//       @font-face {
//         font-family: 'Anges';
//         font-weight: 100 900;
//         font-display: swap;
//         font-style: normal;
//         font-named-instance: 'Regular';
//         src: url(/fonts/arges-variable-wght-wdth-slnt.ttf) format("ttf");
//       }
      
//       /* latin */
//       @font-face {
//         font-family: 'Body Font Name';
//         font-style: normal;
//         font-weight: 400;
//         font-display: swap;
//         src: url('./fonts/bodyfont.woff2') format('woff2'), url('./fonts/bodyfont.woff') format('woff');
//         unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//       }
//       `}
//   />
// )
export const globalStyles = css`
@font-face {
  font-family: 'Arges';
  font-weight: 100 200 300 900;
  font-display: swap;
  font-style: condensed;
  font-named-instance: 'Regular';
  src: url(../fonts/arges-variable-wght-wdth-slnt.ttf) format("ttf");
}

  body {
    margin: 0;
    height: 100%;
    font-family: 'Inter Tight Variable', sans-serif;
        -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   
  }

  h1, h2, h3 {
    color: white;
    font-family: 'Arges', sans-serif !important;

  }
  

}`

//  // Using our theme colour to style h2
//   h2 {
//     color: ${colours.greys.heading}
//   }  *:focus {
//     outline-style: solid;
//     outline-offset: -1px;
//   } @font-face {
//     font-family: 'AvenirStd';
//     src: url(${AvenirStd}) format('opentype');
//   }
//   @font-face {
//     font-family: 'AvenirBlack';
//     src: url(${AvenirBlack}) format('opentype');
//   }  html,