import React from "react";
import styled from "styled-components";
import { Button, IframeFb } from "../../components";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button width="100%" onClick={() => navigate("/education")}>
        APOYO EDUCATIVO
      </Button>
      <Button width="100%" onClick={() => navigate("/social-service")}>
        APOYÓ SOCIAL
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions")}>
        CONVENIOS
      </Button>
      <Button width="100%" onClick={() => navigate("/funeral-fund")}>
        FONDO DE SEPELIO
      </Button>
      <Button width="100%" onClick={() => navigate("/house-service")}>
        CASA DE SERVICIO
      </Button>

      <IframeFb />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 6rem;
`;
