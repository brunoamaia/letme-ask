import styled from "styled-components";

export const LoginButtonStyles = styled.button`
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
`