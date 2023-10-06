import styled from "styled-components";

export const StyledDashboard = styled.div`
  &.dashboard {
    display: flex;
    flex-direction: column;
    align-content:flex-start;
    width:95%;
    max-width:1500px;
    padding:20px 0 0 140px;
    height: 100%;
    margin: 117px auto;

    .dashboard__charts {
      display: flex;
      justify-content: space-evenly; 
      width:100%;   
      align-content: flex-end;  
    }

    .dashboard__charts-left {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      justify-content: space-evenly;
      width: 70%;
      height: 80%;
    }

    .dashboard__charts-right {
      display: flex;
      flex-direction: column;
      width: 23%;
      margin: 0 0 0 0;
      justify-content: space-evenly;
    }
  }
`;