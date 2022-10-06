import React from "react";
import styled, { css } from "styled-components";
import { companies } from "../../../../data-list";
import { CollapseWithButtons } from "../../../../components/public";

export const Gym = () => {
  const gyms = companies.filter((com) => com.type === "gym");

  return (
    <Container>
      <div className="content-logo">
        <h2>Gimnasios</h2>
      </div>
      <CollapseWithButtons dataLists={gyms} />
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
