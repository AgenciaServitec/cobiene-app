import React from "react";
import { Button } from "../../../components";
import styled, { css } from "styled-components";

export const Universidades = () => {
  return (
    <Container>
      <div className="content-logo">
        <h2>Universidades</h2>
      </div>
      <Button width="100%"></Button>
      <Button width="100%">hi</Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
      <Button width="100%"></Button>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    .content-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1rem auto;

      h2 {
        text-align: center;
      }
    }
  `}
`;
