import React from "react";
import { useParams } from "react-router";
import styled, { css } from "styled-components";
import { SortWords, AgreementDetailsCard } from "../../../components/public";
import { useAgreements } from "../../../hooks";
import { SubcategoriesAgreements } from "../../../data-list";

export const EducationCategory = () => {
  const { categoryType } = useParams();

  const { agreements, loading } = useAgreements({ category: 'educationalInstitution' });

  const categoryConfig = SubcategoriesAgreements.educationalInstitution.find(
    (sub) => sub.value === categoryType
  );
  const title = categoryConfig ? categoryConfig.label : "Educación";

  const filteredAgreements = agreements.filter((a) => a.subcategory === categoryType);

  const processedAgreements = filteredAgreements.map((agreement) => {
    if (categoryType === "university") {
      return { ...agreement, title: `Univ. ${agreement.title}` };
    }
    return agreement;
  });

  SortWords(processedAgreements);

  return (
    <Container>
      <div className="content-logo">
        <h2>{title}</h2>
      </div>

      {loading ? (
        <p style={{ textAlign: "center" }}>Cargando {title.toLowerCase()}...</p>
      ) : processedAgreements.length > 0 ? (
        <div className="cards-container">
          {processedAgreements.map((agreement) => (
            <AgreementDetailsCard key={agreement.id} agreement={agreement} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>
          No hay convenios disponibles para {title.toLowerCase()} actualmente.
        </p>
      )}
    </Container>
  );
};

const Container = styled.div`
  ${() => css`
    width: 100%;
    height: auto;
    .content-logo {
      display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 1rem auto;
      h2 { text-align: center; text-transform: uppercase; }
    }
    .cards-container { padding: 0 1rem; }
  `}
`;