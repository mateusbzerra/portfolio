import styled from "styled-components"

export const Container = styled.div`
  height: 80px;
  background: ${({ theme }) => theme.foreground};
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.white};
  h1 {
    font-weight: bold;
    cursor: pointer;
  }
  strong {
    display: block;
  }
`
