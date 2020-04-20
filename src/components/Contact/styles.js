import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding-top: 10vh;
`
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 5vh;
  grid-gap: 10px;
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-radius: 10px;
    padding: 5px;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.5);
    }
    img {
      margin-bottom: 15px;
    }
  }
`
