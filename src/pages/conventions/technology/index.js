import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../../../components/public";
import { useNavigate } from "react-router";

export const Technology = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="content-logo">
        <h2>Tecnología</h2>
      </div>

      <Button
        width="100%"
        onClick={() => navigate("/conventions/technology/servitec-page")}
      >
        SERVITEC
      </Button>
      <Button
        width="100%"
        onClick={() => navigate("/conventions/convention-international")}
      >
        SAMSUNG
      </Button>
    </Container>
  );
};

const Container = styled.div`
  ${() => css`
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
