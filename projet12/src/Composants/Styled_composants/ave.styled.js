import styled from "styled-components";

export const StyledAverageSession = styled.section`
  &.average-session {
    background: red};
    border-radius: 5px;
    position: relative;
    font-size: 11px;
    height: 220px;

    .average-session--label {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: white;
      opacity: 0.7;
      width: 200px;
      height: 200px;
      font-size: 12px;
    }

  }
`;