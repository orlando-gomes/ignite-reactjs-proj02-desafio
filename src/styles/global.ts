import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  line-height: 130%normal;
}

body, input, textarea, button {
  font-family: ${(props) => props.theme.typography.roboto}, sans-serif;
}

`
