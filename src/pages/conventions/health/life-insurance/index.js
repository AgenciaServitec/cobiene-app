import React from "react";
import { companies } from "../../../../data-list";
import { InitialContent, SortWords } from "../../../../components/public";
import styled from "styled-components";
import { CobieneLogo } from "../../../../images";

export const LifeInsurance = () => {
  const lives = companies.filter((com) => com.type === "life-insurance");

  SortWords(lives);
  return (
    <Container>
      <InitialContent
        img={CobieneLogo}
        title="Estamos trabajando por el bienestar"
      />
      <InitialContent title="Proximamente..." />
      {/*<div className="content-logo">
        <h2>Seguros</h2>
      </div>
      <CollapseWithButtons dataLists={lives} />*/}
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
