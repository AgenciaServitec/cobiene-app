import React from "react";
import { Button, Text, Title } from "../../components";
import { CobieneLogo } from "../../images";
import { useNavigate } from "react-router";
import styled from "styled-components";

export const MilitaryCircle = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content-initial">
        <img src={CobieneLogo} alt="Cobien logo" />
        <Title>Circulo Militar</Title>
        <Text>
          Somos una Asociación, creada para brindar bienestar a nuestros
          asociados y publico en general, ofreciendo una gama de servicios de
          entretenimiento y recreación para toda la familia, como actividades
          deportivas, alojamiento, alimentación, peluquería, gimnasio, sauna,
          así como ambientes para celebraciones y eventos.
        </Text>
      </div>
      <Button
        width="100%"
        onClick={() => navigate("/military-circle/officers-circle")}
      >
        CIRCULO COBIENE OO.
      </Button>
      <Button
        width="100%"
        onClick={() => navigate("/military-circle/technicians-circle")}
      >
        CIRCULO MILITAR SPES. TCO. SO.
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
