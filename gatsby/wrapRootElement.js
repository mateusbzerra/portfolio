import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../src/theme/default"
import GlobalStyle from "../src/styles/global"

export function wrapRootElement({ element }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      {element}
    </ThemeProvider>
  )
}
