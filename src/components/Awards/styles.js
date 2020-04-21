import styled from "styled-components"

export const Container = styled.section`
  padding-top: 10vh;
`
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  padding-bottom: 20px;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
