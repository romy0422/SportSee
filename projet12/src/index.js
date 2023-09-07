import { StrictMode } from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import GlobalStyle from "./Pages/global.styled";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);