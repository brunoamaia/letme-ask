import styled from "styled-components";

export const HomeStyle = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;
  }

  main {
    flex: 8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 32px;

    .main-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      align-items: stretch;
      text-align: center;
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