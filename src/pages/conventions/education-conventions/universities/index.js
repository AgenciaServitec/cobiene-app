import { CollapseWithButtons, SortWords } from "../../../../components/public";
import { universities } from "../../../../data-list";
import styled, { css } from "styled-components";
import React from "react";

export const Universities = () => {
  SortWords(universities);
  return (
    <Container>
      <div className="content-logo">
        <h2>Universidades</h2>
      </div>
      <CollapseWithButtons dataLists={universities} />
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
