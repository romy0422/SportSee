import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../CallDatas/CallDatas";
import { StyledHome, StyledButton, StyledButtonWrapper } from "../userIndex.styled";
import Error from '../../Composants/ErrorModal';
const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleCloseModal = () => {
    setError(null);
  };

  const SetUserToken = async (user, id) => {
    try {
      localStorage.setItem("accessToken", id);
      const userData = await getUser(id, user);
      if (userData) {
        navigate(`/${user}/${id}`);
      } else {
        throw new Error("Aucune donnée utilisateur trouvée");
      }
    } catch (err) {
      localStorage.removeItem("accessToken");
      setError(err.message);
    }
  };

  return (
    <StyledHome className="home">
      {error && <Error error={error} onClose={handleCloseModal}/>}
      <StyledButtonWrapper>
        <StyledButton onClick={() => SetUserToken("user", 12)}>API user 12</StyledButton>
        <StyledButton onClick={() => SetUserToken("user", 18)}>API user 18</StyledButton>
        <StyledButton onClick={() => SetUserToken("mock", 18)}>MOCK user Cécilia</StyledButton>
        <StyledButton onClick={() => SetUserToken("mock", 12)}>MOCK user Karl</StyledButton>
      </StyledButtonWrapper>
    </StyledHome>
  );
};

export default Home;
