import React from "react";
import { Main, Info } from "../components";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Main />
      <Info />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main``;
