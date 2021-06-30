import styled from "styled-components";

export const HomeStyle = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.light.bgSecondary};
    color: ${({ theme }) => theme.light.txtTitleSecondary};
    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: ${({ theme }) => theme.light.txtBodySecondary};
    }
  }

  main {
    flex: 8;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 32px;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background-color: ${({ theme }) => theme.light.bgForm};
        border: 1px solid ${({ theme }) => theme.light.txtBodyPrimary};
        width: 100%;
      }

      button {
        margin-top: 16px;
        width: 100%;
      }
    }

    p {
      font-size: 14px;
      color: ${({ theme }) => theme.light.txtBodyPrimary};
      margin-top: 16px;
      
      a {
        color: ${({ theme }) => theme.light.txtLink};
      }
    }
  }

  .create-room {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-top: 64px;
    padding: 0 32px;
    height: 50px;
    border: 0;
    border-radius: 8px;
    font-weight: 500;

    background-color: ${({ theme }) => theme.light.btnBgGoogle};
    color: ${({ theme }) => theme.light.txtTitleSecondary};

    cursor: pointer;
    transition: 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    display: flex;
    align-items: center;

    font-size: 14px;
    color: ${({ theme }) => theme.light.txtBodyPrimary};
    margin: 32px 0;

    &::before {
      content:'';
      flex: 1;
      height: 1px;
      background-color: ${({ theme }) => theme.light.txtBodyPrimary};
      margin-right: 16px;
    }

    &::after {
      content:'';
      flex: 1;
      height: 1px;
      background-color: ${({ theme }) => theme.light.txtBodyPrimary};
      margin-left: 16px;
    }
  }
`