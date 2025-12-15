import { CollapseWithButtons } from "../../../../components/public";
import styled, { css } from "styled-components";
import React, { useEffect, useState } from "react";

export const Universities = () => {
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api-korekenke.web.app/agreements?category=educationalInstitution`
      );
      const data = await response.json();

      setAgreements(data);
    })();
  }, []);

  return (
    <Container>
      <div className="content-logo">
        <h2>Universidades</h2>
      </div>
      <CollapseWithButtons dataLists={agreements} />
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
