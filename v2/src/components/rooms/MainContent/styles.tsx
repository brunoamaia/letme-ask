import styled from "styled-components";

export const MainContentStyles = styled.div`
  .not-sign {
    margin-top: 20px;
    color: ${({ theme }) => theme.light.btnBgGoogle}
  }

  .room-title {
    display: flex;
    align-items: center;
    margin: 32px 0 24px;
    
    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      color: ${({ theme }) => theme.light.txtTitlePrimary};
    }

    span {
      margin-left: 16px;
      background-color: ${({ theme }) => theme.light.txtLink};
      border-radius: 999px;
      padding: 8px 16px;
      color: ${({ theme }) => theme.light.txtTitleSecondary};
      font-weight: 500;
      font-size: 14px;
    }
  }

  .question-list {
    margin-top: 32px;
  }
`