import React from "react";
import {
  Button,
  NavigateGoToLink,
  SearchAgreements,
  Title,
} from "../../../components/public";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { listButtons, SubcategoriesAgreements } from "../../../data-list";
import { useAgreements } from "../../../hooks";

export const EducationConventions = () => {
  const navigate = useNavigate();

  const { agreements: educationAgreements, loading, error } = useAgreements({ category: 'educationalInstitution' });

  const staticButtons = listButtons.education.filter(
    (btn) => btn.urlWeb || btn.url?.includes("videos-tutorial")
  );

  return (
    <Container>
      <Title>Educación</Title>

      {loading ? (
        <p style={{ textAlign: "center", margin: "1rem" }}>Cargando convenios...</p>
      ) : error ? (
        <p style={{ textAlign: "center", color: "red", margin: "1rem" }}>Error cargando convenios</p>
      ) : (
        <SearchAgreements agreements={educationAgreements} />
      )}

      {SubcategoriesAgreements.educationalInstitution?.map((subcategory) => (
        <Button
          key={subcategory.value}
          width="100%"
          onClick={() => navigate(`/conventions/education-conventions/${subcategory.value}`)}
        >
          {subcategory.label.toUpperCase()}
        </Button>
      ))}

      {staticButtons.map((_education) => (
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
          rel="noreferrer"
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
    a { margin-bottom: 1.5rem; display: flex; align-items: start; svg { margin-right: 1rem; } }
  }
`;