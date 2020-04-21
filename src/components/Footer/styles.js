import styled from "styled-components"

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.foreground};
  padding: 20px 0px;
  p {
    color: ${({ theme }) => theme.white};
    text-align: center;
    line-height: 30px;
  }
`
