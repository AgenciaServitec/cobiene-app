import React from "react";
import styled, { css } from "styled-components";
import { CollapseWithButtons } from "../../../components";
import { companies } from "../../../data-list";

export const Technology = () => {
  const technology = companies.filter((com) => com.type === "technology");

  return (
    <Container>
      <div className="content-logo">
        <h2>Tecnología</h2>
      </div>
      <CollapseWithButtons dataLists={technology} />
    </Container>
  );
};

const Container = styled.div`
  ${() => css`
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
  `}
`;
