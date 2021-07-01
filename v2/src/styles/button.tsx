import styled from "styled-components";

export const ButtonStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 32px;
  height: 50px;
  border: 0;
  border-radius: 8px;
  font-weight: 500;
  background-color: #835AFD;
  color: #FFFFFF;

  cursor: pointer;
  transition: 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.outlined {
    background-color: #FFFFFF;
    border: 1px solid #835AFD;
    color: #835AFD;
  }
`