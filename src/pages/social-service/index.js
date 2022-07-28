import React from "react";
import { useNavigate } from "react-router";
import { Service } from "../../images";
import { Button } from "../../components";
import styled, { css } from "styled-components";

export const ServiceSocial = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content-logo">
        <img src={Service} alt="Servicio-social" />
        <h2>APOYO SOCIAL</h2>
        <p>
          <br />
          El departamento de Apoyo Social realiza la suscripción de convenios
          educativos; re categorización de pensiones educativas superiores;
          otorgamiento de becas, apoyo social con bolsa de víveres y ayudas
          económicas; actividades recreativas, culturales, de apoyo religioso y
          asesoramiento al personal, COBIENE, civil y personal con discapacidad
          y sus familiares directos
        </p>
      </div>
      <Button
        width="100%"
        onClick={() => navigate("/social-service/economical-support")}
      >
        APOYO ECONOMICO
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions")}>
        CONVENIOS
      </Button>
      <Button
        width="100%"
        onClick={() => navigate("/social-service/disabled-support")}
      >
        APOYO DISCAPACITADO
      </Button>
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
        text-shadow: 0 0 1ex rgb(51 255 51), 0 0 2px rgb(255 255 255 / 80%);
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
        font-size: 17px;
      }
    }
    .link-list {
      padding: 1rem;
    }
  `}
`;
