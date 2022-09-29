import styled, { css } from "styled-components";
import React from "react";
import { companies } from "../../../../data-list";
import { CollapseWithButtons, SortWords } from "../../../../components";

export const CommercialShop = () => {
  const commercials = companies.filter(
    (comp) => comp.type === "commercial-shop"
  );

  const orderName = commercials.sort((a, b) => {
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

  // console.log(orderName);

  return (
    <Container>
      <div className="content-logo">
        <h2>Tiendas Comerciales</h2>
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
