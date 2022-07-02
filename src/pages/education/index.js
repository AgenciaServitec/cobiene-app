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
        <Title>Apoyo Educativo</Title>
        <Text>
          El COBIENE cuenta con 23 instituciones educativas a nivel nacional en
          donde se imparte una educación de calidad con mejora continua,
          brindando una educación de calidad con mejora continua, una educación
          integral con valores, fortaleciendo la enseñanza del idioma ingles.
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
