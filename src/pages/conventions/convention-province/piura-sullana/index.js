import React from "react";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../components/public";
import { conventionProvincies } from "../../../../data-list";

export const PiuraSullana = () => {
  const conventions = conventionProvincies.filter(
    (province) => province.province === "piura-sullana"
  );
  return (
    <div>
      <InitialContent title="Piura -Sullana" />

      <CollapseWithButtons dataLists={conventions} />
    </div>
  );
};
