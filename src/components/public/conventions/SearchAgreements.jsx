import React, { useEffect, useState } from "react";
import { Input } from "../ui";
import { CollapseWithButtons } from "./CollapseWithButtons";
import styled from "styled-components";

export const SearchAgreements = ({ agreements = [] }) => {
  const [convention, setConvention] = useState("");
  const [conventions, setConventions] = useState([]);

  useEffect(() => {
    const _conventions = agreements.filter((agreement) =>
      agreement.title.toLowerCase().includes(convention.trim().toLowerCase())
    );

    if (convention === "") return setConventions([]);

    return setConventions(_conventions);
  }, [convention]);

  return (
    <Container>
      <Input
        onChange={(e) =>  setConvention(e.target.value)}
        value={convention}
        placeholder="Busca tus convenios"
      />
      {conventions.length >= 1 && (
        <div className="container-conventions">
          <CollapseWithButtons dataLists={conventions} />
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .container-conventions {
    padding: 0.625rem;
    border: 3px solid #fff;
    border-radius: 0.625rem;
  }
`;
