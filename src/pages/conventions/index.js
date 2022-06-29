import React from "react";
import { Convenios } from "../../images";
import { Button } from "../../components";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router";

export const Conventions = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content-logo">
        <img src={Convenios} alt="Apoyo educativo" />
        <h2>Convenios Vigentes con Entidades Educativas y Empresas Privadas</h2>
        <p>
          <br />
          Convenios Educativos Suscritos por el, Comando de Bienestar del
          COBIENE con Universidades, Institutos Tecnicos superiores y Pre
          Universitarios, asi como con empresas privadas con Dsctos y tarifas
          preferenciales que benefician al personal COBIENE y civil en
          actividad, retiro, discapacitados y familiares.
        </p>
      </div>
      <Button
        width="100%"
        onClick={() => navigate("/conentions/universidades")}
      >
        UNIVERSIDADES
      </Button>
      <Button width="100%" onClick={() => navigate("/conentions/institutos")}>
        INSTITUTOS
      </Button>
      <Button width="100%" onClick={() => navigate("/conentions/academiaspre")}>
        ACADEMIAS PRE
      </Button>

      <Button width="100%">EMPRESAS</Button>
      <Button width="100%">BANCO</Button>
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
      img {
        width: 8em;
        height: auto;
        object-fit: contain;
        margin-bottom: 1rem;
      }
      p {
        color: ${theme.colors.white};
        text-align: justify;
        font-size: 19px;
      }
    }
  `}
`;
