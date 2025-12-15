import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Button,
  CollapseWithButtons,
  InitialContent,
  SearchAgreements,
} from "../../../components/public";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { companies, listButtons } from "../../../data-list";

export const MultiService = () => {
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api-korekenke.web.app/agreements?category=company`
      );
      const data = await response.json();

      setAgreements(data);
    })();
  }, []);

  return (
    <Container>
      <InitialContent title="Convenios Multiservicios" />
      <SearchAgreements agreements={companies} />
      <CollapseWithButtons dataLists={agreements} />



      {/*{listButtons.multiservice.map((_multiservice) => (
        <Button
          key={_multiservice.title}
          width="100%"
          onClick={() =>
            navigate(_multiservice.url ? _multiservice.url : "/page-default")
          }
        >
          {_multiservice.title}
        </Button>
      ))}*/}

      <div className="list-convenios">
        <a
          href="https://korekenke.mil.pe/agreements/sheets/multiservices"
          target="_blank"
        >
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
