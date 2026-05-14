import React from "react";
import { useParams } from "react-router";
import {
  InitialContent,
  AgreementDetailsCard
} from "../../../../../components/public";
import { CobieneLogo } from "../../../../../images";
import { useAgreements } from "../../../../../hooks";
import { SubcategoriesAgreements } from "../../../../../data-list";

export const Service = () => {
  const { service } = useParams(); // Obtiene el parámetro dinámico

  const { agreements: companies, loading } = useAgreements({ category: 'company' });

  const allSubcategories = [
    ...(SubcategoriesAgreements.company || []),
    ...(SubcategoriesAgreements.educationalInstitution || [])
  ];

  const currentSubcategory = allSubcategories.find(sub => sub.value === service);
  const title = currentSubcategory ? currentSubcategory.label : "Convenios";

  const filteredCompanies = companies.filter((comp) => comp.subcategory === service);

  if (loading) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Cargando convenios...</p>;

  return (
    <>
      <InitialContent title={title} />

      {filteredCompanies.length >= 1 ? (
        <div style={{ padding: "0 1rem" }}>
          {filteredCompanies.map(agreement => (
            <AgreementDetailsCard key={agreement.id} agreement={agreement} />
          ))}
        </div>
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