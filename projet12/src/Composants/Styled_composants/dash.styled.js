import styled from "styled-components";

export const StyledDashboard = styled.div`
  &.dashboard {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content:flex-start;
    width:calc(1440px - 300px);
    height: 100%;
    margin: auto 117px;

    .dashboard__charts {
      display: flex;
      justify-content: space-between;
      height: 65%;
      
    }

    .dashboard__charts-left {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      justify-content: space-between;
      width: 74%;
      height: 100%;
    }

    .dashboard__charts-right {
      display: flex;
      flex-direction: column;
      row-gap: 7%;
      width: 23%;
      height: 100%;
      margin: auto 0 0 0;
      align-content:flex-end;
    }
  }
`;