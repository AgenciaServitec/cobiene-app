import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../components/public";
import React from "react";
import { conventionProvincies } from "../../../../data-list";

export const Puno = () => {
  const convention = conventionProvincies.filter(
    (province) => province.province === "puno"
  );
  return (
    <div>
      <InitialContent title="Puno" />

      <CollapseWithButtons dataLists={convention} />
    </div>
  );
};
