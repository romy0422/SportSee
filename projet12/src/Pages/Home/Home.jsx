import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const SetUserToken = (user, id) => {
    localStorage.removeItem("accessToken");
    localStorage.setItem("accessToken", id);
    navigate(`/${user}/${id}`);
  };

  return (
        <div>
          <button
            onClick={() => {
              SetUserToken("user", 12);
            }}
          >
             API_user_12
          </button>
        <div>
          <button
            onClick={() => {
              SetUserToken("user", 18);
            }}
          >
             API_user_18
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              SetUserToken("mock", 18);
            }}
          >
             MOCK_user_Cécilia
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              SetUserToken("mock", 12);
            }}
          >
            MOCK_user_Karl
          </button>
        </div>

      </div>

  );
};
export default Home;