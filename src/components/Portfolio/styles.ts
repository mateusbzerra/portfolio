import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 10vh;
`;
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const CardWrapper = styled.a`
  text-decoration: none;
  background: ${({ theme }) => theme.blue};
  border-radius: 15px;
`;
export const CardContent = styled.div`
  background: ${({ theme }) => theme.foreground};
  padding: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
  border-radius: 15px;
  margin-top: -10px;
  margin-right: -10px;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s;
  > .top-content {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  &:hover {
    transform: translateX(10px);
  }
  img {
    max-width: 80px;
    border-radius: 20px;
  }
  .content {
    margin-left: 15px;
    h2 {
      padding: 10px 5px;
    }
    p {
      font-size: 14px;
      padding: 5px;
      color: #bbb;
    }
  }
`;

export const CardTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  .tag {
    background: ${({ theme }) => theme.background};
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 1px 5px;
    border-radius: 5px;
    span {
      font-size: 11px;
      color: #aaa;
    }
  }
`;
export const SeeMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px 10px;

  svg {
    margin-left: 8px;
    margin-right: 2px;
    margin-bottom: 2px;
  }
  a {
    transition: opacity 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    height: 50px;
    padding: 0px 50px;
    color: #fff;
    background-color: ${({ theme }) => theme.blue};
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    &:hover {
      opacity: 0.5;
    }
  }
`;