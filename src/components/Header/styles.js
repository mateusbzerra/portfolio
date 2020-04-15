import styled from 'styled-components';

export const Container = styled.header`
  background-image: url('/images/header-background.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  min-height: calc(100% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;
  flex-direction: row;
  padding: 0px 15px;
  color: ${({ theme }) => theme.white};
  .left {
    h1 {
      margin-bottom: 20px;
    }
    p {
      line-height: 22px;
      font-size: 15px;
      max-width: 100%;
    }
  }
  .right {
    img {
      max-width: 100%;
      padding-left: 10px;
    }
  }
`;
