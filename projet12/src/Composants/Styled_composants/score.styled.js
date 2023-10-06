import styled from "styled-components";

export const StyledScore = styled.section`
  &.score {
    width: 200px;
    height: 200px;
    position: relative;
    background: #FBFBFB;
    border-radius: 5px;

    .score__legend {
      font-size: 15px;
      color: #20253A;
      ;
    }

    p {
      width: 96px;
    }

    .score__label {
      position: absolute;
      top: 53%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #282D30;
    }
    .score__number {
      font-weight: 700;
      font-size: clamp(16px, 1.806vw, 26px);
    }

    .score__text {
      font-size: clamp(14px, 1.111vw, 16px);
      color: #282D30;
      line-height: 26px;
    }
  }
`;