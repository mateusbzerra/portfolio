import styled from "styled-components"
export const Container = styled.section`
  display: flex;
  flex-direction: column;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }

  img {
    z-index: 1;
    max-width: 184px;
    max-height: 240px;
    width: 100%;
    height: 100%;
    margin-left: -20px;
  }
`
export const Content = styled.div`
  background: ${({ theme }) => theme.blue};
  display: flex;
  width: 80%;
  border-radius: 20px;
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`
export const Card = styled.div`
  background: ${({ theme }) => theme.foreground};
  margin-left: 15px;
  margin-top: -15px;
  margin-right: -10px;
  margin-bottom: 15px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #fff;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.5);
`
export const CardContent = styled.div`
  margin-right: 50px;
  padding: 20px;
  @media only screen and (max-width: 800px) {
    margin-right: 0px;
    padding: 10px 0px;
  }
  p {
    line-height: 25px;
    font-size: 15px;
    font-weight: 100;
  }
`
