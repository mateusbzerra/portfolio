import { createGlobalStyle } from 'styled-components';
import { CustomTheme } from '../theme/default';

export default createGlobalStyle<{ theme: CustomTheme }>`
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
html,body{
  height:100%;
}
h1.title{
  color: #fff;
  font-weight: bold;
  padding-bottom: 5vh;
  font-size: 40px;
  margin: 0px auto;
  width: fit-content;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    width: 100%;
    width: 100%;
    height: 8px;
    background:${({ theme }) => theme.blue};
    bottom: 35px;
    left: 0px;
  }
}
`;
