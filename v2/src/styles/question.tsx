import styled from "styled-components";

export const QuestionStyles = styled.div`
  background-color: #FEFEFE;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }

  &.answered {
    background-color: #DBDCDD;
  }

  &.highlighted {
    background-color: #F4F0FF;
    border: 1px solid #835AFD;

    footer .user-info span {
      color: #29292E;
    }
  }

  p {
    color: #29292E;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

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
        color: #737380;
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background-color: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 8px;

        &.liked {
          color: #835AFD;

          svg path {
            stroke: #835AFD;
          }
        }
      }

      &:hover {
        filter: brightness(0.2);
      }
    }
  }
`