import styled from "styled-components";

export const NavBarStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;

  .logo {
    max-height: 45px;
    cursor: pointer;
  }

  .close-room {
    background-color: ${({ theme }) => theme.light.danger}
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }
`