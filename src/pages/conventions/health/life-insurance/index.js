import React from "react";
import { companies } from "../../../../data-list";
import {
  CollapseWithButtons,
  InitialContent,
  SortWords,
} from "../../../../components/public";

export const LifeInsurance = () => {
  const lives = companies.filter((com) => com.type === "life-insurance");

  SortWords(lives);
  return (
    <>
      <InitialContent title="Seguros" />
      <CollapseWithButtons dataLists={lives} />
    </>
  );
};
