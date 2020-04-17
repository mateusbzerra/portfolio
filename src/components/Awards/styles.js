import styled from "styled-components"

export const Container = styled.section`
  padding: 10vh 0px;
`
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  padding-bottom: 20px;
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
