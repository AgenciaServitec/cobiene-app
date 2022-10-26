import React from "react";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import { conventionProvincies } from "../../../../../data-list";

export const HotelsPiura = () => {
  const hotels = conventionProvincies.filter(
    (province) =>
      province.province === "piura-sullana" && province.type === "hotel"
  );

  return (
    <>
      <InitialContent title="Hoteles" />

      <CollapseWithButtons dataLists={hotels} />
    </>
  );
};
