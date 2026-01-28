import React from "react";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 56px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 30px;   
  }
`;

const App = () => {
  return (
    <HashRouter>
      <GlobalStyle />
      <Header />
      <Main>
        <AppRoutes />
      </Main>
    </HashRouter>
  );
};

export default App;
