import React from "react";
import { Button, Text, Title } from "../../components";
import { ApoyoEducativo } from "../../images";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";

export const Education = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content-initial">
        <img src={ApoyoEducativo} alt="Apoyo educativo" />
        <Title>Jefatura de Apoyo Educativo</Title>
        <Text>
          La JAE controla el funcionamiento de la gestión pedagógica y
          académica, además, apoya la gestión de recursos humanos y materiales
          de las IIEE del Ejército, impulsando la calidad educativa la cual debe
          articularse en base a los valores institucionales, en concordancia con
          los objetivos del Sistema Educativo Nacional y del Comando de
          Bienestar del Ejército.
        </Text>
        <Text>
          El Comando bienestar del ejército cuenta con 23 instituciones
          educativas a nivel nacional.
        </Text>
      </div>
      <Button
        width="100%"
        onClick={() => navigate("/education/lima-institutes")}
      >
        INSTITUCIONES DE LIMA
      </Button>
      <Button
        width="100%"
        onClick={() => navigate("/education/province-institutes")}
      >
        INSTITUCIONES DE PROVINCIA
      </Button>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
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
  `}
`;
