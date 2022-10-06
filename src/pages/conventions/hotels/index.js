import React from "react";
import styled, { css } from "styled-components";
import { CollapseWithButtons } from "../../../components/public";
import { companies } from "../../../data-list";

export const Hotels = () => {
  const hotel = companies.filter((company) => company.type === "hotel");

  return (
    <Container>
      <div className="content-logo">
        <h2>Hoteles</h2>
      </div>
      <CollapseWithButtons dataLists={hotel} />
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
