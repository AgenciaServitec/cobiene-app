import React from "react";
import { useNavigate } from "react-router";
import { Button, InitialContent } from "../../../components/public";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const MultiService = () => {
  const navigate = useNavigate();

  const listButtons = [
    { title: "ASESORÍA LEGAL", url: "/page-default" },
    {
      title: "EMPRESAS",
      url: "/conventions/multi-service/companies",
    },
    {
      title: "FINANCIERAS",
      url: "/conventions/multi-service/financials",
    },
    {
      title: "HOTELES",
      url: "/conventions/multi-service/hotel",
    },
    {
      title: "SALUD",
      url: "/conventions/multi-service/health",
    },
    {
      title: "SEGUROS",
      url: "/conventions/multi-service/life-insurance",
    },
    {
      title: "RESTAURANTES",
      url: "/conventions/multi-service/restaurants",
    },
    {
      title: "TECNOLOGÍA",
      url: "/conventions/technology",
    },
    {
      title: "TRANSPORTES",
      url: "/conventions/multi-service/transport",
    },
    {
      title: "BANCOS",
      url: "/conventions/multi-service/banks",
    },
  ];

  return (
    <Container>
      <InitialContent title="Convenios Multiservicios" />

      {listButtons.map((listButton, index) => (
        <Button
          key={index}
          width="100%"
          onClick={() =>
            navigate(listButton.url ? listButton.url : "/page-default")
          }
        >
          {listButton.title}
        </Button>
      ))}

      <div className="list-convenios">
        <a href="https://drive.google.com/file/d/1OoNDcmtydINrLsiyON9hZJVwM75Dm-n6/view?usp=sharing">
          <FontAwesomeIcon icon={faList} size="2x" />
          Lista de Convenios de empresas:
        </a>
      </div>
    </Container>
  );
};

const Container = styled.section`
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
