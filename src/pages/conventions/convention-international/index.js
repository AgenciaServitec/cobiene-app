import React from "react";
import {
  CollapseWithButtons,
  InitialContent,
  SortWords,
} from "../../../components/public";
import { CobieneLogo } from "../../../images";
import { conventionInternational } from "../../../data-list";

export const ConventionInternational = () => {
  SortWords(conventionInternational);

  return (
    <>
      <InitialContent img={CobieneLogo} title="Convenios Internacionales" />
      <CollapseWithButtons dataLists={conventionInternational} />
    </>
  );
};
