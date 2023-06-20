import { CollapseWithButtons, SortWords } from "../../../../components/public";
import { universities } from "../../../../data-list";
import styled, { css } from "styled-components";
import React from "react";

export const Universities = () => {
  const newUniv = universities.map((uni) => {
    const addUniv = `Univ. ${uni.title}`;
    return { ...uni, title: addUniv };
  });
  SortWords(newUniv);
  return (
    <Container>
      <div className="content-logo">
        <h2>Universidades</h2>
      </div>
      <CollapseWithButtons dataLists={newUniv} />
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
