import styled, { css } from "styled-components";
import React from "react";

export const CommercialShop = () => (
  <Container>
    <div className="content-logo">
      <h2>Tiendas Comerciales</h2>
    </div>
  </Container>
);

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
