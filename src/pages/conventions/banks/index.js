import React from "react";
import styled, { css } from "styled-components";
import { CollapseWithButtons, SortWords } from "../../../components/public";
import { banks } from "../../../data-list";

export const Banks = () => {
  // console.log("antes->", banks);
  SortWords(banks);

  return (
    <Container>
      <div className="content-logo">
        <h2>Bancos</h2>
      </div>
      <CollapseWithButtons dataLists={banks} />
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
