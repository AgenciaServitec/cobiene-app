import React from "react";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../components/public";
import { companies } from "../../../../data-list";

export const LimaRestaurants = () => {
  const restaurants = companies.filter((comp) => comp.type === "restaurant");

  return (
    <>
      <InitialContent title="Restaurantes" />

      <CollapseWithButtons dataLists={restaurants} />
    </>
  );
};
