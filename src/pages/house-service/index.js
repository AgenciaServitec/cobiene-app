import React from "react";
import {
  Button,
  InitialContent,
  NavigateGoToLink,
} from "../../components/public";
import styled from "styled-components";
import { CobieneLogo } from "../../images";
import { useNavigate } from "react-router";

export const HouseService = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <InitialContent title="Vivienda" img={CobieneLogo} />

      <Button
        width="100%"
        onClick={() => navigate("/house-service/house-services")}
      >
        Casa de Servicio
      </Button>
      <Button
        width="100%"
        onClick={() => NavigateGoToLink("https://fovime.com/")}
      >
        Fovime
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;
