import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  img {
    z-index: 1;
    max-width: 184px;
    max-height: 240px;
    width: 100%;
    height: 100%;
    margin-left: -20px;
  }
`;
export const Content = styled.div`
  background: ${({ theme }) => theme.blue};
  display: flex;
  width: 90%;
  border-radius: 20px;
`;
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
`;
export const CardContent = styled.div`
  margin-right: 50px;
  padding: 20px 50px;
  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
  }
  p {
    line-height: 25px;
    font-size: 15px;
    font-weight: 100;
  }
`;
export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  padding-bottom: 20px;
`;
