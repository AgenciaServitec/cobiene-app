import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return <Container>Footer</Container>;
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
