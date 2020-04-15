import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:none;
  background-color:transparent;
  box-sizing:border-box;
  font-family: 'Fira Code', monospace;
}
h1{
  font-weight:500;
}
body{
  background:${({ theme }) => theme.background};
  
}
html,#___gatsby,#gatsby-focus-wrapper,body{
  height:100%;
}
`
