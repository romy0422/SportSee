import styled from "styled-components";

export const StyledActivity = styled.section`
  &.activity {
    width: 85%;
    height: fit-contents;
    margin-bottom : -40px;
    padding: 24px 0px 0px 0px;
    background: white;
    border-radius: 5px;

    .activity__title {
      font-size: 15px;
      padding-bottom: 30px;
    }

    .recharts-legend-item {
      margin-left: 30px;
    }
    .recharts-legend-item-text,
    .recharts-layer {
      font-size: 15px;
      margin-left: 5px;
      color: darkgrey;
    }
    .recharts-surface {
      margin-right: 10px;
    }

    .tooltip {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 63px;
      width: 39px;
      background:red;
      color: white;
      font-size: 7px;
    }

    p {
      text-align: center;
    }
  }
`;