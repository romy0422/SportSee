// PROPS
import React from "react";
import LogoSidebar from "./LogoSidebar";
import yoga from "../img/yoga.svg";
import natation from "../img/swimmer.svg";
import velo from "../img/biker.svg";
import alter from "../img/dumbbell.svg";
// CSS
import { StyledSidebar } from "./Styled_composants/side.styled";
const Sidebar = () => {
  const YEAR = new Date().getFullYear();
  return (
    <StyledSidebar className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__icons">
        <LogoSidebar image={yoga} />
          <LogoSidebar image={velo} />
          <LogoSidebar image={natation} />
          <LogoSidebar image={alter} />
        </ul>
      </nav>
      <p className="sidebar__text">&copy;{"SportSee " + YEAR}</p>
    </StyledSidebar>
  );
};

export default Sidebar;