import React from "react";
import { Convenios } from "../../images";
import { Button, Text, Title } from "../../components";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const Conventions = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content-initial">
        <img src={Convenios} alt="Apoyo educativo" />
        <Title>
          Convenios Vigentes con Entidades Educativas y Empresas Privadas
        </Title>
        <Text>
          Convenios Educativos Suscritos por el Comando de Bienestar con
          Universidades, Institutos superiores y Pre Universidad,son empresas
          privadas con Descuentos y tarifas preferenciales que benefician al
          personal COBIENE y civil en actividad, retiro, discapacitados y
          familiares.
        </Text>
      </div>
      <Button
        width="100%"
        onClick={() => navigate("/conventions/universities")}
      >
        UNIVERSIDADES
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions/institutes")}>
        INSTITUTOS
      </Button>
      {/*<Button
        width="100%"
        onClick={() => navigate("/conventions/pre-academies")}
      >
        ACADEMIAS PRE
      </Button>*/}
      <Button width="100%" onClick={() => navigate("/conventions/companies")}>
        EMPRESAS
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions/banks")}>
        BANCO
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  .content-initial {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;

    img {
      width: 8em;
      height: auto;
      object-fit: contain;
      margin-bottom: 1rem;
    }
  }
`;
