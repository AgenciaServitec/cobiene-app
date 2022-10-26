import React from "react";
import { Button, InitialContent, SortWords } from "../../../components/public";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export const ConventionMultiServices = () => {
  const navigate = useNavigate();

  const listButtons = [
    {
      title: "EMPRESAS",
      url: "/conventions/companies",
    },
    {
      title: "FINANCIERAS",
      url: "/conventions/financials",
    },
    {
      title: "BANCOS",
      url: "/conventions/banks",
    },
    {
      title: "SALUD",
      url: "/conventions/health",
    },
    {
      title: "SEGUROS",
      url: "/conventions/health/life-insurance",
    },
    {
      title: "TRANSPORTES",
      url: "/conventions/transportations",
    },
    {
      title: "HOTELES",
      url: "/conventions/hotels",
    },
    {
      title: "RESTAURANTES",
      url: "/conventions/convention-multiservices/lima-restaurants",
    },
    {
      title: "TECNOLOGÍA",
      url: "/conventions/technology",
    },
    { title: "ASESORÍA LEGAL", url: "/page-default" },
  ];

  SortWords(listButtons);
  return (
    <Container>
      <InitialContent title="Convenios Multiservicios" />

      {listButtons.map((listButton, index) => (
        <Button
          key={index}
          width="100%"
          onClick={() => navigate(listButton.url)}
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
