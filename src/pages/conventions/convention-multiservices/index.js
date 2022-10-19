import React from "react";
import { Button, InitialContent } from "../../../components/public";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export const ConventionMultiServices = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <InitialContent title="Convenios de Multiservicios" />
      {/*<Button*/}
      {/*  width="100%"*/}
      {/*  onClick={() => navigate("/conventions/education-conventions")}*/}
      {/*>*/}
      {/*  EDUCACIÓN*/}
      {/*</Button>*/}
      <Button width="100%" onClick={() => navigate("/conventions/companies")}>
        EMPRESAS
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions/financials")}>
        FINANCIERAS
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions/banks")}>
        BANCOS
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions/health")}>
        SALUD
      </Button>
      <Button
        width="100%"
        onClick={() => navigate("/conventions/transportations")}
      >
        TRANSPORTES
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions/hotels")}>
        HOTELES
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-multiservices/lima-restaurants")
        }
      >
        RESTAURANTES
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions/technology")}>
        TECNOLOGÍA
      </Button>

      <div className="list-convenios">
        <a href="https://drive.google.com/file/d/1OoNDcmtydINrLsiyON9hZJVwM75Dm-n6/view?usp=sharing">
          <FontAwesomeIcon icon={faList} size="2x" />
          Lista de Convenios de empresas:
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .list-convenios {
    color: dodgerblue;
    text-decoration: underline;
    text-transform: uppercase;
    margin: 1.5rem 0;
    font-size: 1em;
    a {
      margin-bottom: 1.5rem;
      display: flex;
      align-items: start;
      svg {
        margin-right: 1rem;
      }
    }
  }
`;
