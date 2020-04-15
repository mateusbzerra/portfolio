import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.blue};
  border-radius: 13px;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  background: ${({ theme }) => theme.foreground};
  margin-left: 12px;
  padding: 20px;
  border-radius: 13px;
  align-self: stretch;
  color: ${({ theme }) => theme.white};
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.5);
`;
