import styled from "styled-components";

export const StyledSidebar = styled.div`
&.sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom:0px;
    top: 0;
    z-index: 1;
    width: 117px;
    min-height: 100vh;
    height: 100%;
    background: black;

    .sidebar__icons {
        display: grid;
        row-gap: 20px;
    }

    .sidebar__text {
        position: absolute;
        bottom:80px;
        width: 100%;
        color: white;
        font-size: 12px;
        white-space: nowrap;
        transform: rotate(-90deg);
    }
`;