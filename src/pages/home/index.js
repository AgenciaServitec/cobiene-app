import React from "react";
import styled, { css } from "styled-components";

export const Home = () => {
  return (
    <Container>
      <h1>HOME PAGE</h1>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    h1 {
      color: ${theme.colors.white};
    }
  `}
`;
