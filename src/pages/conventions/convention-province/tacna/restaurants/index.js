import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import React from "react";
import { conventionProvincies } from "../../../../../data-list";

export const RestaurantsTacna = () => {
  const restaurants = conventionProvincies.filter(
    (province) =>
      province.province === "tacna" && province.type === "restaurant"
  );

  return (
    <>
      <InitialContent title="Restaurantes" />

      <CollapseWithButtons dataLists={restaurants} />
    </>
  );
};
