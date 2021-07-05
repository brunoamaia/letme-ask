import styled, {keyframes} from "styled-components";


const spinCircle = keyframes`
 0% { transform: rotate(-90deg) skew(60deg); }
 100% { transform: rotate(270deg) skew(60deg); }
`

export const LoadingStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: calc(100vh - 120px);
 
  .container {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 30px;

    .circular-progress {
      position: relative;
      display: inline-block;
      margin-right: 20px;

      .circular-progress-circle {
        position: relative;
        width: 200px;
        height: 200px;
        background: ${({ theme }) => theme.light.borderBgTird};
        border-radius: 50%;
        overflow: hidden;
          
        

        .segment {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 100vw;
          background: ${({ theme }) => theme.light.txtBodyPrimary};
          transform-origin: 0 0;
          transform: rotate(-90deg) skew(60deg);

          animation: ${spinCircle} 2s infinite;
          animation-timing-function: linear;
        }
      }

      .circular-progress-background {
        position: absolute;
        padding: 80px;
        background: ${({ theme }) => theme.light.bgPrimary};
        top: 10%;
        left: 10%;
        border-radius: 50%;
      }
    }
  }
`