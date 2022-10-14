import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../components/public";
import React from "react";
import { conventionProvincies } from "../../../../data-list";

export const Tacna = () => {
  const convention = conventionProvincies.filter(
    (province) => province.province === "tacna"
  );

  return (
    <div>
      <InitialContent title="Tacna" />
      <CollapseWithButtons dataLists={convention} />
    </div>
  );
};
