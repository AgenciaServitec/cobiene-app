import React from "react";
import { useParams } from "react-router";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import { companies } from "../../../../../data-list";
import { CobieneLogo } from "../../../../../images";

export const Service = () => {
  const { service } = useParams();

  const listTitles = [
    { title: "Comida peruana", serviceUrl: "peruvianFood" },
    { title: "Tiendas comerciales", serviceUrl: "commercialShop" },
    { title: "Gimnasio", serviceUrl: "gym" },
    { title: "Laboratorios", serviceUrl: "laboratory" },
    { title: "Entidades médicas", serviceUrl: "clinic" },
    { title: "Servitec", serviceUrl: "servitec" },
    { title: "Samsung", serviceUrl: "samsung" },
  ];

  const titleFilter = listTitles.filter((list) => list.serviceUrl === service);

  const company = companies.filter((comp) => comp.type === service);

  return (
    <>
      {titleFilter.map(({ title }, index) => (
        <InitialContent key={index} title={title ? title : "No hay titulo"} />
      ))}

      {company.length >= 1 ? (
        <>
          {/*{service === "samsung" ? (*/}
          {/*  <SamsungPage data={company} />*/}
          {/*) : (*/}
          <CollapseWithButtons dataLists={company} />
          {/*)}*/}
        </>
      ) : (
        <>
          <InitialContent
            img={CobieneLogo}
            title="Estamos trabajando por el bienestar"
          />
          <InitialContent title="Proximamente..." />
        </>
      )}
    </>
  );
};

// const SamsungPage = ({ data }) => {
//   console.log("data->", data);
//   return <h2>Hola</h2>;
// };
