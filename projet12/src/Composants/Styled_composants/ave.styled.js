import styled from "styled-components";

export const StyledAverageSession = styled.section`
  &.average-session {
    background: red;
    border-radius: 5px;
    position: relative;
    font-size: 11px;
    height: 200px;
    width: 200px;

    & h6 {
      color: rgb(255,255,255,0.8);
      position:absolute;
      z-index:100;
      font-size:14px;
      top:10px;
      left:10px;
    }
  }
`;
