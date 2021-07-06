import styled from "styled-components";

export const CreateNewQuestionStyles = styled.form`
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
`