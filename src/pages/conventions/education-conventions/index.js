import React from "react";
import { Button, NavigateGoToLink, Title } from "../../../components/public";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { listButtons } from "../../../data-list";

export const EducationConventions = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Educación</Title>

      {listButtons.education.map((_education) => (
        <Button
          key={_education.title}
          width="100%"
          onClick={() =>
            _education?.urlWeb
              ? NavigateGoToLink(_education.urlWeb)
              : navigate(_education.url)
          }
        >
          {_education.title}
        </Button>
      ))}

      <div className="list-convenios">
        <a
          href="https://drive.google.com/file/d/1QJariYXQQATL8crHmH4zPfM5jdwn0XDQ/view?usp=sharing"
          target="_blank"
        >
          <FontAwesomeIcon icon={faList} size="2x" />
          Lista de convenios de universidades e institutos:
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
