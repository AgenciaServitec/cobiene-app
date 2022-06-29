import React from "react";
import { Button } from "../../components";
import styled, { css } from "styled-components";
import { ApoyoEducativo } from "../../images";

export const Education = () => {
  return (
    <Container>
      <div className="content-logo">
        <img src={ApoyoEducativo} alt="Apoyo educativo" />
        <h2>Apoyo Educativo</h2>
        <p>
          El COBIENE cuenta con 23 instituciones educativas a nivel nacional en
          donde se imparte una educación de calidad con mejora continua,
          brindando una educación de calidad con mejora continua, una educación
          integral con valores, fortaleciendo la enseñanza del idioma ingles.
        </p>
      </div>
      <Button width="100%">INSTITUCIONES DE LIMA</Button>
      <Button width="100%">INSTITUCIONES DE PROVINCIA</Button>
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
        margin-bottom: 1rem;
      }
      h2 {
        text-shadow: ${theme.text_shadow.shadow_green};
      }
      p {
        color: ${theme.colors.white};
        text-align: center;
      }
    }
  `}
`;
