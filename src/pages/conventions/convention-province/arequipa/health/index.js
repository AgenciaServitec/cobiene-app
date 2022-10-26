import React from "react";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import { FilterProvince } from "../../../../../utils";

export const HealthArequipa = () => {
  const health = FilterProvince("arequipa", "health");

  return (
    <>
      <InitialContent title="Salud" />

      <CollapseWithButtons dataLists={health} />
    </>
  );
};
