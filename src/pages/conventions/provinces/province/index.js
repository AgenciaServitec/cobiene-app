import React from "react";
import { useNavigate, useParams } from "react-router";
import {
  Button,
  CollapseWithButtons,
  InitialContent,
} from "../../../../components/public";
import { conventionProvincies } from "../../../../data-list";

export const Province = () => {
  const { provinceId } = useParams();
  const navigate = useNavigate();

  const listProvinces = [
    {
      provinceId_: "piura-sullana",
      title: "Piura - Sullana",
      buttons: [
        {
          title: "Restaurantes",
          url: `/conventions/provinces/${provinceId}/restaurant`,
        },
        { title: "Hoteles", url: `/conventions/provinces/${provinceId}/hotel` },
      ],
    },
    {
      provinceId_: "arequipa",
      title: "Arequipa",
      buttons: [
        {
          title: "Pasteleria",
          url: `/conventions/provinces/${provinceId}/cake-shop`,
        },
        { title: "Salud", url: `/conventions/provinces/${provinceId}/health` },
      ],
    },
    {
      provinceId_: "ayacucho",
      title: "Ayacucho",
    },
    {
      provinceId_: "chiclayo",
      title: "Chiclayo",
      buttons: [
        {
          title: "Empresas",
          url: `/conventions/provinces/${provinceId}/company`,
        },
        {
          title: "Hoteles",
          url: `/conventions/provinces/${provinceId}/hotel`,
        },
        {
          title: "Salud",
          url: `/conventions/provinces/${provinceId}/health`,
        },
      ],
    },
    { provinceId_: "huancayo", title: "Huancayo" },
    { provinceId_: "puno", title: "Puno" },
    {
      provinceId_: "tacna",
      title: "Tacna",
      buttons: [
        { title: "Hoteles", url: `/conventions/provinces/${provinceId}/hotel` },
        {
          title: "Restaurantes",
          url: `/conventions/provinces/${provinceId}/restaurant`,
        },
        { title: "Salud", url: `/conventions/provinces/${provinceId}/health` },
      ],
    },
    {
      provinceId_: "trujillo",
      title: "Trujillo",
      buttons: [
        { title: "Hoteles", url: `/conventions/provinces/${provinceId}/hotel` },
        {
          title: "Restaurantes",
          url: `/conventions/provinces/${provinceId}/restaurant`,
        },
      ],
    },
    {
      provinceId_: "tumbes",
      title: "Tumbes",
      buttons: [
        { title: "Hoteles", url: `/conventions/provinces/${provinceId}/hotel` },
        {
          title: "Restaurantes",
          url: `/conventions/provinces/${provinceId}/restaurant`,
        },
        {
          title: "Transportes",
          url: `/conventions/provinces/${provinceId}/transport`,
        },
      ],
    },
  ];

  const services = listProvinces.filter(
    (listProvince) => listProvince.provinceId_ == provinceId
  );

  return (
    <>
      {services.map((service, index) => (
        <section key={index}>
          <InitialContent
            title={service.title ? service.title : "No hay titulo"}
          />
          {!service.buttons && service.provinceId_ ? (
            <MapServices service={service} />
          ) : (
            <MapButtons buttons={service.buttons} navigate={navigate} />
          )}
        </section>
      ))}
    </>
  );
};

const MapServices = ({ service }) => {
  const conventionService = conventionProvincies.filter(
    (convention) => convention.province == service.provinceId_
  );

  console.log(conventionService);

  return <CollapseWithButtons dataLists={conventionService} />;
};

const MapButtons = ({ buttons, navigate }) =>
  buttons.map((button, index) => (
    <Button
      key={index}
      width="100%"
      onClick={() => navigate(button.url ? button.url : "/page-default")}
    >
      {button.title}
    </Button>
  ));
