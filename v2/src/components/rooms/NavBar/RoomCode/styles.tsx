import styled from "styled-components";

export const RoomCodeStyle = styled.button`
  display: flex;

  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background-color: #FFFFFF;
  border: 1px solid #835AFD;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #835AFD;
    padding: 5px 12px;
    height: 100%;
  }

  span {
    display: block;
    flex: 1;
    align-self: center;
    padding: 0 16px 0 12px;
    width: 240px;
    font-size: 14px;
    font-weight: 500;
  }
`