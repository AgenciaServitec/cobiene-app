import React from "react";
import { Button } from "../../../components/public";
import { useNavigate } from "react-router";
import styled from "styled-components";

export const Health = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h2>Salud</h2>
      <Button
        width="100%"
        onClick={() => navigate("/conventions/health/laboratories")}
      >
        Laboratorios
      </Button>
      <Button
        width="100%"
        onClick={() => navigate("/conventions/health/clinics")}
      >
        Entidades médicas
      </Button>
    </Container>
  );
};

const Container = styled.div`
  h2 {
    text-align: center;
  }
`;
