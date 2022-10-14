import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import React from "react";
import { conventionProvincies } from "../../../../../data-list";

export const RestaurantsPiura = () => {
  const restaurants = conventionProvincies.filter(
    (province) =>
      province.province === "piura-sullana" && province.type === "restaurant"
  );

  return (
    <>
      <InitialContent title="Restaurantes" />

      <CollapseWithButtons dataLists={restaurants} />
    </>
  );
};
