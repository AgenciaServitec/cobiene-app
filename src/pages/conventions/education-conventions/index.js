import React from "react";
import { Button, Title } from "../../../components/public";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const EducationConventions = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Educación</Title>

      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/education-conventions/universities")
        }
      >
        Universidades
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/education-conventions/institutes")
        }
      >
        Institutos
      </Button>

      <div className="list-convenios">
        <a href="https://drive.google.com/file/d/1lKdcV-kFnP7aHESdeSZ36eJXxqgTjlwh/view?usp=sharing">
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
