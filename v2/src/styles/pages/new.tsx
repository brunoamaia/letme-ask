import styled from "styled-components";

export const NewPageStyle = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;
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
    
    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
    }

    p {
      font-size: 14px;
      color: ${({ theme }) => theme.light.txtBodyPrimary};
      margin-top: 16px;
      
      a {
        margin-left: 5px;
        cursor: pointer;
        color: ${({ theme }) => theme.light.txtLink};
      }
    }
  }
`