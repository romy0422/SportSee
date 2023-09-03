import React from "react";
import PropTypes from "prop-types";

// CSS
import { StyledHeaderDashboard } from "./Styled_composants/headDash.styled";

const HeaderDashboard = ({ first }) => {
  return (
    <StyledHeaderDashboard className="dashboardHeader">
      <h1 className="dashboardHeader__title">
        Bonjour
        <span className="dashboardHeader__name">{" " + first}</span>
      </h1>
      <p className="dashboardHeader__text">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </StyledHeaderDashboard>
  );
};

HeaderDashboard.propTypes = {
  first: PropTypes.string.isRequired,
};

export default HeaderDashboard;