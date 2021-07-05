import { createGlobalStyle } from "styled-components"

import { GolabalTheme } from './theme'

export const GlogalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${GolabalTheme.light.bgPrimary};
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`