import React from "react";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";
import { Button } from "../../../components/public";

export const Companies = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="content-logo">
        <h2>Empresas</h2>
      </div>
      <Button
        width="100%"
        onClick={() => navigate("/conventions/companies/commercial-shop")}
      >
        Tiendas Comerciales
      </Button>
      <Button
        width="100%"
        onClick={() => navigate("/conventions/companies/gym")}
      >
        Gimnasios
      </Button>
    </Container>
  );
};

const Container = styled.div`
  ${() => css`
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
      }
    }
  `}
`;
