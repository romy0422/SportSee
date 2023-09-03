import styled from "styled-components";

export const StyledHeader = styled.div`
@import url('https://fonts.googleapis.com/css2? family= Roboto & display=swap');
   &.header{
    position: relative;
    z-index: 3;
    width: 100%;
    background: black;
    box-shadow: 0px 4px 4px 0px #00000040;
   
    .header__nav {
      height: 91px;
      display: flex;
      align-items: center;
    }

    .header__link-img-wrapper {
      display: flex;
      align-items: center;
      width: 20%;
      padding-left: 30px;
    }

    .header__img {
      height: 58px;
    }

    .header__links {
      display: flex;
      justify-content: space-around;
      width: 80%;
    }

    .header__link {
      color: white;
      font-size: 24px;
      text-decoration: none;
      list-style: none;
      font-family:"Roboto";
    }
  }
`;