// PROPS
import React from "react";

// CSS
import { StyledSidebar } from "./Styled_composants/side.styled";
const Sidebar = () => {
  const YEAR = new Date().getFullYear();
  return (
    <StyledSidebar className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__icons">
         
        </ul>
      </nav>
      <p className="sidebar__text">&copy;{"SportSee " + YEAR}</p>
    </StyledSidebar>
  );
};

export default Sidebar;