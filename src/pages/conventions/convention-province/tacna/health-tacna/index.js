import { conventionProvincies } from "../../../../../data-list";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import React from "react";

export const HealthTacna = () => {
  const health = conventionProvincies.filter(
    (province) => province.province === "tacna" && province.type === "health"
  );

  return (
    <>
      <InitialContent title="Restaurantes" />

      <CollapseWithButtons dataLists={health} />
    </>
  );
};
