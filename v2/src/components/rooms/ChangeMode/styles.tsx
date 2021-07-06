import styled from "styled-components";

export const ChangeModeStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  button {
    height: 50px;
    padding: 0 20px;
    border-radius: 8px; 
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.light.btnBgGoogle};
    color: ${({ theme }) => theme.light.txtTitleSecondary};

    &.admin-mode {
      background-color: ${({ theme }) => theme.light.btnBgPrimary}
    }
  }

`