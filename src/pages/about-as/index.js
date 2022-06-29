import React from "react";
import { Barracks, Servitec } from "../../images";
import { Button } from "../../components";
import styled, { css } from "styled-components";

export const AboutAs = () => {
  return (
    <Container>
      <div className="content-log">
        <img src={Barracks} alt="base" />
        <h2>NOSOTROS</h2>
      </div>
      <Button width="100%">PRESENTACIÓN</Button>
      <Button width="100%">MISIÓN Y VISIÓN</Button>
      <Button width="100%">INFORMACION Y SOPORTE</Button>
      <img className="img-servitec" src={Servitec} alt="servitec" />
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
    img .img-servitec {
      height: 10px;
      width: 10px;
    }
  `}
`;
