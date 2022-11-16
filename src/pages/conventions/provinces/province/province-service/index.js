import React from "react";
import { useParams } from "react-router";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import { conventionProvincies } from "../../../../../data-list";
import { CobieneLogo } from "../../../../../images";

export const ProvinceService = () => {
  const { provinceId, provinceService } = useParams();

  const listTitles = [
    { title: "Restaurantes", type: "restaurant" },
    { title: "Hoteles", type: "hotel" },
    { title: "Pasteleria", type: "cake-shop" },
    { title: "Salud", type: "health" },
    { title: "Transportes", type: "transport" },
    { title: "Empresas", type: "company" },
    { title: "Clinicas", type: "clinic" },
  ];
  const titleFilter = listTitles.filter(
    (listTitle) => listTitle.type == provinceService
  );

  const listService = conventionProvincies.filter(
    (convention) =>
      convention.province == provinceId && convention.type == provinceService
  );

  return (
    <>
      {titleFilter.map(({ title }, index) => (
        <InitialContent key={index} title={title ? title : "No hay titulo"} />
      ))}

      {listService.length >= 1 ? (
        <CollapseWithButtons dataLists={listService} />
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
