import { Global } from "@emotion/react";
import * as React from "react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Arges';
      src: url('./fonts/arges-variable-wght-wdth-slnt.ttf') format('truetype');
           font-weight: 200 700;
           font-display: swap;
           font-style: normal;
    }
    
    
    @font-face {
      font-family: 'ClashGrotesk Extralight';
      src: url('./fonts/ClashGrotesk-Extralight.woff2') format('woff2'),
           url('./fonts/ClashGrotesk-Extralight.woff') format('woff'),
           url('./fonts/ClashGrotesk-Extralight.ttf') format('truetype');
           font-weight: 200;
           font-display: swap;
           font-style: normal;
    }
    
    
    @font-face {
      font-family: 'ClashGrotesk Light';
      src: url('./fonts/ClashGrotesk-Light.woff2') format('woff2'),
           url('./fonts/ClashGrotesk-Light.woff') format('woff'),
           url('./fonts/ClashGrotesk-Light.ttf') format('truetype');
           font-weight: 300;
           font-display: swap;
           font-style: normal;
    }
    
    
    @font-face {
      font-family: 'Arges Condensed Regular';
      src:url('./fonts/arges-variable-wght-wdth-slnt.ttf') format('truetype');
           font-weight: 400;
           font-display: swap;
           font-style: normal;
    }
    
    
    @font-face {
      font-family: 'ClashGrotesk Medium';
      src: url('./fonts/ClashGrotesk-Medium.woff2') format('woff2'),
           url('./fonts/ClashGrotesk-Medium.woff') format('woff'),
           url('./fonts/ClashGrotesk-Medium.ttf') format('truetype');
           font-weight: 500;
           font-display: swap;
           font-style: normal;
    }
    
    
    @font-face {
      font-family: 'ClashGrotesk Semibold';
      src: url('./fonts/ClashGrotesk-Semibold.woff2') format('woff2'),
           url('./fonts/ClashGrotesk-Semibold.woff') format('woff'),
           url('./fonts/ClashGrotesk-Semibold.ttf') format('truetype');
           font-weight: 600;
           font-display: swap;
           font-style: normal;
    }
    
    
    @font-face {
      font-family: 'ClashGrotesk Bold';
      src: url('./fonts/ClashGrotesk-Bold.woff2') format('woff2'),
           url('./fonts/ClashGrotesk-Bold.woff') format('woff'),
           url('./fonts/ClashGrotesk-Bold.ttf') format('truetype');
           font-weight: 700;
           font-display: swap;
           font-style: normal;
      `}
  />
);

export default Fonts;
