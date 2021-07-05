import styled from "styled-components";

export const RoomStyle = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.light.bgQuestionAnswered};
  
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
  
      max-width: 1120px;
      margin: 0 auto;
  
      .logo {
        max-height: 45px;
        cursor: pointer;
      }

      > div {
        display: flex;
        gap: 16px;

        button {
          height: 40px;
        }
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

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

    form {
      textarea {
        min-height: 120px;
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 9px;
        background-color: ${({ theme }) => theme.light.bgForm};
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
      }

      .form-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;

        .user-info {
          display: flex;
          align-items: center;

          img {
            height: 32px;
            width: 32px;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;
            color: ${({ theme }) => theme.light.txtTitlePrimary};
            font-weight: 500;
            font-size: 14px;
          }
        }

        > span {
          font-size: 14px;
          color: ${({ theme }) => theme.light.txtBodyPrimary};
          font-weight: 500;

          button {
            background-color: transparent;
            border: 0;
            color: ${({ theme }) => theme.light.txtLink};
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            padding-left: 3px;
            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 32px;
    }

  }
`