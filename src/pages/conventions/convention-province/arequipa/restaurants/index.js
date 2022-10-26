import React from "react";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import { FilterProvince } from "../../../../../utils";

export const RestaurantsArequipa = () => {
  const restaurants = FilterProvince("arequipa", "restaurant");

  return (
    <>
      <InitialContent title="Pastelerias" />
      <CollapseWithButtons dataLists={restaurants} />
    </>
  );
};
