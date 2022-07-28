import React from "react";
import styled, { css } from "styled-components";
import { Button, IframeFb } from "../../components";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content-first">
        <h1>COBIENE EP</h1>
        <h2>Ejercito del Perú</h2>
      </div>
      <Button width="100%" onClick={() => navigate("/education")}>
        APOYO EDUCATIVO
      </Button>
      <Button width="100%" onClick={() => navigate("/social-service")}>
        SERVICIO SOCIAL
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions")}>
        CONVENIOS
      </Button>
      <Button width="100%" onClick={() => navigate("/funeral-fund")}>
        FONDO DE SEPELIO
      </Button>
      <Button width="100%" onClick={() => navigate("/house-service")}>
        CASA DE SERVICIO
      </Button>

      <IframeFb />
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    .content-first {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1rem auto;
      img {
        width: 8em;
        height: auto;
        object-fit: contain;
        margin-bottom: 0.5rem;
      }
      h1 {
        padding-top: 1.5rem;
        color: ${theme.colors.white};
      }
      h2 {
        font-size: 1rem;
      }
    }
  `}
`;
