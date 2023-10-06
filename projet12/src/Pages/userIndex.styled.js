import styled from "styled-components";

export const StyledHome = styled.div`
  &.home {
    padding-left: 117px;

    .home__links {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 33%;
      margin: auto;
      padding-top: 50px;
    }

    .home__links--link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 87px;
      border-radius: 5px;
      font-size: 24px;
      color: primary;
      text-decoration: none;
      box-shadow: 0px 5px 15px #00000049;
      text-align: center;
      padding: 5px;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

`;


export const StyledButton = styled.button`
    background: red;
    font-size: 40px;
    color:white;
    border-radius: 10px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1); // a little shadow below the button
    margin: 10px; // for a bit of spacing between buttons
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s; // smoothens the button press effect

    &:active {
        transform: scale(0.98); // button press effect
    }
`;

export const StyledButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh; `

export const StyledModal = styled.div`
      position: fixed;
      top:30%;
      left: 50%;
      transform: translate(-50%, -50%);
      width:30%;
      height: 30%;
      background: rgba(0, 0, 0, 1); 
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000; 
      border-radius:20px;
    `;
    
export const ErrorMessage = styled.div`
      color: white;
      font-size: 40px;
    `;
    
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 30px;
  color: white;  // you can adjust the color as needed
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
