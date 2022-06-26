import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../../components";
import { CobieneLogo } from "../../images";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content-logo">
        <img src={CobieneLogo} alt="Cobiene logo" />
        <h1>COBIENE EP</h1>
      </div>
      <Button width="100%" onClick={() => navigate("/education")}>
        APOYO EDUCATIVO
      </Button>
      <Button width="100%">APOYO EDUCATIVO</Button>
      <Button width="100%">CONVENIOS</Button>
      <Button width="100%">FONDO DE SEPELIO</Button>
      <Button width="100%">CASA DE SERVICIO</Button>
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
      img {
        width: 8em;
        height: auto;
        object-fit: contain;
        margin-bottom: 0.5rem;
      }
      h1 {
        color: ${theme.colors.white};
      }
    }
  `}
`;
