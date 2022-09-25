import { companies } from "../../../../data-list";
import { CollapseWithButtons } from "../../../../components";
import styled from "styled-components";
import React from "react";

export const Laboratories = () => {
  const laboratory = companies.filter((com) => com.type === "laboratory");

  return (
    <Container>
      <div className="content-logo">
        <h2>Laboratorios</h2>
      </div>
      <CollapseWithButtons dataLists={laboratory} />
    </Container>
  );
};

const Container = styled.div`
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
`;
