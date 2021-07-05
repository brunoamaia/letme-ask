import styled from "styled-components";

export const LastTopicsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 20px auto 0;
  width: 100%;

  background-color: ${({ theme }) => theme.light.bgForm};

  h3 {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    font-family: 'Poppins', sans-serif;
    padding: 10px;

    background-color: ${({ theme }) => theme.light.btnBgPrimary};
    border: 1px solid ${({ theme }) => theme.light.borderBgPrimary};
    color: ${({ theme }) => theme.light.txtTitleSecondary};
  }

  .items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    
    background-color: ${({ theme }) => theme.light.bgForm};
    border-left: 1px solid ${({ theme }) => theme.light.borderBgPrimary};
    border-right: 1px solid ${({ theme }) => theme.light.borderBgPrimary};
    border-bottom: 1px solid ${({ theme }) => theme.light.borderBgTird};

    cursor: pointer;

    p {
      margin: 0;
      color: ${({ theme }) => theme.light.txtTitlePrimary};
    }
  }

  .items:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.light.borderBgPrimary};
  }
`