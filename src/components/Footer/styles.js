import styled from "styled-components"

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.foreground};
  padding: 20px 0px;
  a {
    background: #602e89;
    color: #fff;
    padding: 5px;
    border-radius: 10px;
    text-decoration: none;
  }
  p {
    color: ${({ theme }) => theme.white};
    text-align: center;
    line-height: 30px;
  }
`
