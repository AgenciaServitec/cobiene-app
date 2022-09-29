import React from "react";
import styled, { css } from "styled-components";
import { CollapseWithButtons } from "../../../components";
import { banks } from "../../../data-list";

export const Banks = () => {
  const orderName = banks.sort((a, b) => {
    const titleA = a.title.toLocaleLowerCase();
    const titleB = b.title.toLocaleLowerCase();

    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return (
    <Container>
      <div className="content-logo">
        <h2>Bancos</h2>
      </div>
      <CollapseWithButtons dataLists={orderName} />
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
