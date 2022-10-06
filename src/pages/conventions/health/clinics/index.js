import { companies } from "../../../../data-list";
import { CollapseWithButtons, SortWords } from "../../../../components/public";
import styled from "styled-components";
import React from "react";

export const Clinics = () => {
  const clinic = companies.filter((com) => com.type === "clinic");

  SortWords(clinic);
  return (
    <Container>
      <div className="content-logo">
        <h2>Clínicas</h2>
      </div>
      <CollapseWithButtons dataLists={clinic} />
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
