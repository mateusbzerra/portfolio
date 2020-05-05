import styled, { keyframes } from "styled-components"

export const Container = styled.header`
  background-image: url("/images/header-background.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  min-height: calc(100% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`
const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform: translateX(-50px)
  }
  to{
    opacity:1;
    transform: translateX(0);
  }
`
const appearFromRight = keyframes`
  from{
    opacity:0;
    transform: translateX(50px)
  }
  to{
    opacity:1;
    transform: translateX(0);
  }
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  align-items: center;
  margin: 0px auto;
  flex-direction: row;
  padding: 0px 15px;
  color: ${({ theme }) => theme.white};
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  .left {
    animation: ${appearFromLeft} 1s;
    @media only screen and (max-width: 900px) {
      text-align: center;
      padding-bottom: 10px;
    }
    h1 {
      margin-bottom: 20px;
    }

    p {
      line-height: 22px;
      font-size: 15px;
      max-width: 100%;
      color: #bbb;
    }
    strong {
      color: #fff;
    }
    @media only screen and (max-width: 500px) {
      p {
        line-height: 22px;
        font-size: 15px;
      }
    }
  }
  .right {
    display: flex;
    animation: ${appearFromRight} 1s;
    img {
      margin: 0px auto;
      max-width: 100%;
      padding-left: 10px;
    }
    @media only screen and (max-width: 800px) {
      img {
        max-height: 30vh;
      }
    }
    @media only screen and (max-width: 700px) {
      img {
        max-height: 35vh;
      }
    }
  }
`
