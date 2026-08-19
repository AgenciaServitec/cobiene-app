import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spin } from "antd";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import { conventionProvincies } from "../../../../../data-list";
import { CobieneLogo } from "../../../../../images";
import { mapApiAgreementToCollapse } from "../../../../../components/public/conventions/mapAgreement";

const mapSubcategoryToType = (subcategory) => {
  switch (subcategory) {
    case "store":
      return "company";
    case "Hotel":
      return "hotel";
    case "school":
    case "university":
    case "institute":
      return "studies";
    case "health":
      return "health";
    case "journey":
      return "transport";
    default:
      return subcategory;
  }
};

export const ProvinceService = () => {
  const { provinceId, provinceService } = useParams();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const listTitles = [
    { title: "Restaurantes", type: "restaurant" },
    { title: "Hoteles", type: "hotel" },
    { title: "Pastelería", type: "cake-shop" },
    { title: "Salud", type: "health" },
    { title: "Transportes", type: "transport" },
    { title: "Empresas", type: "company" },
    { title: "Clínicas", type: "clinic" },
    { title: "Estudios", type: "studies" },
  ];

  const currentTitle = listTitles.find(
    (item) => item.type === provinceService
  )?.title;

  useEffect(() => {
    if (provinceId === "tacna") {
      const fetchProvinceAgreements = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `https://api-korekenke.web.app/agreements?department=${provinceId}`
          );
          const data = await response.json();

          if (Array.isArray(data)) {
            const filtered = data.filter((item) => {
              const mappedType = mapSubcategoryToType(
                item.subcategory || item.category
              );
              return mappedType === provinceService;
            });

            const formattedAgreements = filtered.map(mapApiAgreementToCollapse);

            setServices(formattedAgreements);
          }
        } catch (error) {
          console.error("Error al obtener los convenios:", error);
          setServices([]);
        } finally {
          setLoading(false);
        }
      };

      fetchProvinceAgreements();
    } else {
      setLoading(false);
      const staticServices = conventionProvincies.filter(
        (convention) =>
          convention.province === provinceId &&
          convention.type === provinceService
      );
      setServices(staticServices);
    }
  }, [provinceId, provinceService]);

  return (
    <Spin spinning={loading}>
      <>
        <InitialContent title={currentTitle || "No hay título"} />

        {!loading && services.length >= 1 ? (
          <CollapseWithButtons
            dataLists={services}
            isRawHtml={provinceId === "tacna"}
          />
        ) : (
          !loading && (
            <>
              <InitialContent
                img={CobieneLogo}
                title="Estamos trabajando por el bienestar"
              />
              <InitialContent title="Próximamente..." />
            </>
          )
        )}
      </>
    </Spin>
  );
};
