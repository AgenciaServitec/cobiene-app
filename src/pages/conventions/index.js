import React from "react";
import { Convenios } from "../../images";
import { Button, Text, Title } from "../../components";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export const Conventions = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content-initial">
        <img src={Convenios} alt="Apoyo educativo" />
        <Title>
          Convenios Vigentes con Entidades Educativas y Empresas Privadas
        </Title>
        <Text>
          El Comando de Bienestar del Ejército ha suscrito convenios con
          universidades, institutos superiores, empresas privadas y bancos en
          beneficio de todo el personal militar, civil en actividad o retiro y
          sus familiares directos los cuales podrán disfrutar de tarifas o
          costos diferenciados en todos sus servicios.
        </Text>
      </div>

      <Button
        width="100%"
        onClick={() => navigate("/conventions/universities")}
      >
        UNIVERSIDADES
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions/institutes")}>
        INSTITUTOS
      </Button>
      {/*<Button
        width="100%"
        onClick={() => navigate("/conventions/pre-academies")}
      >
        ACADEMIAS PRE
      </Button>*/}
      <Button width="100%" onClick={() => navigate("/conventions/companies")}>
        EMPRESAS
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions/banks")}>
        BANCO
      </Button>

      <div className="list-convenios">
        {/* old link
        <a href="https://drive.google.com/file/d/1qg_UAFd9oq_GyB7cGjErzYcSXYlNFWDO/view?usp=sharing">*/}
        <a href="https://drive.google.com/file/d/1OoNDcmtydINrLsiyON9hZJVwM75Dm-n6/view?usp=sharing">
          <FontAwesomeIcon icon={faList} size="2x" />
          Lista de Convenios de empresas:
        </a>

        <a href="https://drive.google.com/file/d/1pK7E2rAXIhb0cni54e9285WyvuDwktWq/view?usp=sharing">
          <FontAwesomeIcon icon={faList} size="2x" />
          Lista de convenios de universidades e institutos:
        </a>
      </div>
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
