import styled from "styled-components"

export const FormCreateRoomStyles = styled.form`
  position: relative;
  
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    width: 100%;
    
    background-color: ${({ theme }) => theme.light.bgForm};
    border: 1px solid ${({ theme }) => theme.light.txtBodyPrimary};
  }
  input.open {
    padding: 0 25% 0 16px;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    
    min-width: 50px;
    width: 20%;
    height: 50px;
    border: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: ${({ theme }) => theme.light.btnBgSecondary};
    transition: background-color 0.5s ease;
    cursor: pointer;
    z-index: -1;
  }
  button.open {
    background-color: ${({ theme }) => theme.light.bgSecondary};
    z-index: 0;
  }
`