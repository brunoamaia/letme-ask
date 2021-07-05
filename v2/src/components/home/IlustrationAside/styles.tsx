import styled from "styled-components";

export const IlustrationAsideStyles = styled.aside`
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
`