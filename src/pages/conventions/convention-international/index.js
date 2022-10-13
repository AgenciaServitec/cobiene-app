import React from "react";
import {
  InitialContent,
  ShowAndHiddenButton,
  SortWords,
} from "../../../components/public";
import { CobieneLogo } from "../../../images";
import { conventionInternational } from "../../../data-list";

export const ConventionInternational = () => {
  SortWords(conventionInternational);

  return (
    <div>
      <InitialContent img={CobieneLogo} title="Convenios Internacionales" />
      <ShowAndHiddenButton
        dataLists={conventionInternational}
        contentAlign="center"
        paddingButton=".5em .2em"
      />
    </div>
  );
};
