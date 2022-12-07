import React from "react";
import { useNavigate } from "react-router";
import { Button, InitialContent, SortWords } from "../../../components/public";
import { CobieneLogo } from "../../../images";

export const Provinces = () => {
  const navigate = useNavigate();

  const listButtons = [
    {
      title: " PIURA - SULLANA",
      url: "/conventions/provinces/piura-sullana",
    },
    {
      url: "/conventions/provinces/tacna",
      title: "TACNA",
    },
    {
      url: "/conventions/provinces/puno",
      title: "PUNO",
    },
    {
      title: "TRUJILLO",
      url: "/conventions/provinces/trujillo",
    },
    {
      title: "TUMBES",
      url: "/conventions/provinces/tumbes",
    },
    {
      title: "AYACUCHO",
      url: "/conventions/provinces/ayacucho",
    },
    {
      title: "CHICLAYO",
      url: "/conventions/provinces/chiclayo",
    },
    {
      title: "HUANCAYO",
      url: "/conventions/provinces/huancayo",
    },
    {
      title: "AREQUIPA",
      url: "/conventions/provinces/arequipa",
    },
    {
      title: "LA MERCED",
      url: "/conventions/provinces/merced",
    },
    {
      title: "LAMBAYEQUE",
      url: "/conventions/provinces/lambayeque",
    },
    {
      title: "TARAPOTO",
      url: "/conventions/provinces/tarapoto",
    },
  ];

  SortWords(listButtons);

  return (
    <>
      <InitialContent
        img={CobieneLogo}
        title="Convenios de Provincia"
        description="Son aquellos convenios firmados por el Sistema de Bienestar de la Gran Unidad a nivel Nacional en coordinación con el comando de bienestar del ejército en provecho de todo el personal  militar y civil que labora en nuestra institución  en situación de actividad y retiro.
"
      />

      {listButtons.map((listButton, index) => (
        <Button
          key={index}
          width="100%"
          onClick={() =>
            navigate(listButton.url ? listButton.url : "/page-default")
          }
        >
          {listButton.title}
        </Button>
      ))}
    </>
  );
};
