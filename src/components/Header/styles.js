import styled from "styled-components"

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
    @media only screen and (max-width: 900px) {
      p {
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
  .right {
    display: flex;

    img {
      margin: 0px auto;
      max-width: 100%;
      padding-left: 10px;
    }
    @media only screen and (max-width: 900px) {
      img {
        max-height: 25vh;
      }
    }
  }
`
