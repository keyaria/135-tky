import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/arges-variable-wght-wdth-slnt.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Arges"
    />,
  ])
}