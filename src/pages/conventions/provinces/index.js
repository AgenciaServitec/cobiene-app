import React from "react";
import { useNavigate } from "react-router";
import {
  Button,
  InitialContent,
  SearchAgreements,
} from "../../../components/public";
import { CobieneLogo } from "../../../images";
import { conventionProvincies, listButtons } from "../../../data-list";

export const Provinces = () => {
  const navigate = useNavigate();

  return (
    <>
      <InitialContent
        img={CobieneLogo}
        title="Convenios de Provincia"
        description="Son aquellos convenios firmados por el Sistema de Bienestar de la Gran Unidad a nivel Nacional en coordinación con el comando de bienestar del ejército en provecho de todo el personal  militar y civil que labora en nuestra institución  en situación de actividad y retiro.
"
      />

      <SearchAgreements agreements={conventionProvincies} />

      {listButtons.province.map((_province) => (
        <Button
          key={_province.title}
          width="100%"
          onClick={() =>
            navigate(_province.url ? _province.url : "/page-default")
          }
        >
          {_province.title}
        </Button>
      ))}
    </>
  );
};
