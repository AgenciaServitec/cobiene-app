import React from "react";
import styled, { css } from "styled-components";
import { CollapseWithButtons, SortWords } from "../../../components";
import { companies } from "../../../data-list";

export const Financials = () => {
  const financial = companies.filter((com) => com.type === "financial");

  SortWords(financial);
  return (
    <Container>
      <div className="content-logo">
        <h2>Financieras</h2>
      </div>
      <CollapseWithButtons dataLists={financial} />
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
