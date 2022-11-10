import React from "react";
import { useNavigate, useParams } from "react-router";
import {
  Button,
  CollapseWithButtons,
  InitialContent,
} from "../../../../components/public";
import { companies } from "../../../../data-list";

export const ServiceType = () => {
  const { typeService } = useParams();
  const navigate = useNavigate();

  const listServices = [
    {
      type: "restaurants",
      title: "Restaurantes",
      buttons: [
        {
          title: "Chifa",
          url: `/conventions/multi-service/${typeService}/chifa`,
        },
        {
          title: "Comida peruana",
          url: `/conventions/multi-service/${typeService}/peruvianFood`,
        },
        { title: "Cevicheria", url: "" },
      ],
    },
    {
      type: "companies",
      title: "Empresas",
      buttons: [
        {
          title: "Tiendas comerciales",
          url: `/conventions/multi-service/${typeService}/commercialShop`,
        },
        {
          title: "Gimnasios",
          url: `/conventions/multi-service/${typeService}/gym`,
        },
      ],
    },
    {
      type: "financials",
      title: "Financieras",
    },
    {
      type: "health",
      title: "Salud",
      buttons: [
        {
          title: "Laboratorios",
          url: `/conventions/multi-service/${typeService}/laboratory`,
        },
        {
          title: "Entidades médicas",
          url: `/conventions/multi-service/${typeService}/clinic`,
        },
      ],
    },
    {
      type: "hotel",
      title: "Hoteles",
    },
    {
      type: "banks",
      title: "Bancos",
    },
    {
      type: "transport",
      title: "Transportes",
    },
    {
      type: "life-insurance",
      title: "Seguros",
    },
  ];

  const serviceType = listServices.filter(
    (service) => service.type === typeService
  );

  return (
    <>
      {serviceType.map((service, index) => (
        <section key={index}>
          <InitialContent title={service.title} />
          {!service.buttons && service.type ? (
            <MapTypes service={service} />
          ) : (
            <MapButtons service={service} navigate={navigate} />
          )}
        </section>
      ))}
    </>
  );
};

const MapButtons = ({ service, navigate }) =>
  service.buttons.map((button, index) => (
    <Button
      key={index}
      width="100%"
      onClick={() => navigate(button.url ? button.url : "/page-default")}
    >
      {button.title}
    </Button>
  ));

const MapTypes = ({ service }) => {
  const services = companies.filter((com) => com.type === service.type);
  return <CollapseWithButtons dataLists={services} />;
};
