import styled from "styled-components"

export const Container = styled.div`
  background: ${({ theme }) => theme.blue};
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Content = styled.div`
  background: ${({ theme }) => theme.foreground};
  margin-left: 12px;
  padding: 20px 10px;
  border-radius: 13px;
  align-self: stretch;
  color: ${({ theme }) => theme.white};
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.5);
  p {
    font-size: 14px;
    line-height: 18px;
    padding: 5px;
    color: #bbb;
  }
`
export const IconWrapper = styled.div`
  margin-left: 10px;
  svg {
    color: #fff;
    width: 40px;
    height: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
  .header-title {
    margin-left: 10px;
    h4 {
      line-height: 25px;
    }
    span {
      display: block;
      color: #aaa;
      font-size: 13px;
      font-weight: normal;
    }
  }
`
