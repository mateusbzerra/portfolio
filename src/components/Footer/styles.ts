import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.foreground};
  padding: 20px 0px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.white};
    text-align: center;
    line-height: 30px;
  }
  @keyframes heartbeat {
    0% {
      transform: scale(0.75);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.75);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(0.75);
    }
  }
  span {
    color: #c05ce6;
    width: 40px;
    font-size: 50px;
    animation: heartbeat 2s infinite ease-in-out;
  }
`;
