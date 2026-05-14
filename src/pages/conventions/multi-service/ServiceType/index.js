import React from "react";
import { useParams } from "react-router";
import {
  InitialContent,
  AgreementDetailsCard
} from "../../../../components/public";
import { useAgreements } from "../../../../hooks";

import { SubcategoriesAgreements } from "../../../../data-list";

export const ServiceType = () => {
  const { typeService } = useParams();

  const { agreements: companies, loading } = useAgreements({ category: 'company' });

  const currentSubcategory = SubcategoriesAgreements.company.find(
    (sub) => sub.value === typeService
  );

  const title = currentSubcategory ? currentSubcategory.label : "Convenios";

  const filteredServices = companies.filter((com) => com.subcategory === typeService);

  return (
    <section>
      <InitialContent title={title} />

      {loading ? (
        <p style={{ textAlign: "center", margin: "2rem" }}>Cargando información...</p>
      ) : filteredServices.length > 0 ? (
        <div style={{ padding: "0 1rem" }}>
          {filteredServices.map(agreement => (
            <AgreementDetailsCard key={agreement.id} agreement={agreement} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", margin: "2rem" }}>
          No hay convenios disponibles para esta categoría actualmente.
        </p>
      )}
    </section>
  );
};