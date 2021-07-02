import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  background: ${({ theme }) => theme.foreground};
`;

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
  img {
    width: 100%;
    max-width: 60px;
    cursor: pointer;
  }
`;

export const DropdownMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  li {
    a {
      color: #fff;
      font-size: 20px;
      text-decoration: none;

      border-radius: 10px;
      padding: 10px 15px;
      margin-right: 5px;
      display: flex;
      flex-direction: row;

      > img {
        align-self: center;
        margin-right: 5px;
        max-width: 20px;
        margin-bottom: 3px;
      }

      &:hover {
        background: ${({ theme }) => theme.background};
      }
      &.selected {
        background: ${({ theme }) => theme.background};
      }
    }

    & + li a::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 30px;
      background: rgba(255, 255, 255, 0.5);
      margin-top: 0px;
      margin-left: -18px;
    }
  }
`;
