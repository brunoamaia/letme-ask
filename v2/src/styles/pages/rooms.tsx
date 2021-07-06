import styled from "styled-components";

export const RoomStyle = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.light.bgQuestionAnswered};
  
    
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    
  }
`