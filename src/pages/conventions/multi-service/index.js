import React from "react";
import { useNavigate } from "react-router";
import {
  Button,
  InitialContent,
  SearchAgreements,
} from "../../../components/public";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useAgreements } from "../../../hooks";
import { SubcategoriesAgreements } from "../../../data-list";

export const formatAgreementToCard = (agreement) => {
  return {
    ...agreement,
    img: agreement.logoPhoto?.url || "",
    description: agreement.companyBenefits || agreement.scope || "",
  };
};

export const MultiService = () => {
  const navigate = useNavigate();
  const { agreements: companies, loading, error } = useAgreements({ category: 'company' });

  const formattedCompanies = companies.map(formatAgreementToCard);

  // 2. Obtenemos las subcategorías de la empresa (Financieras, Banco, Salud, etc.)
  const companySubcategories = SubcategoriesAgreements.company || [];

  return (
    <Container>
      <InitialContent title="Convenios Multiservicios" />

      {loading ? (
        <p style={{ textAlign: "center", margin: "1rem" }}>Cargando convenios...</p>
      ) : error ? (
        <p style={{ textAlign: "center", color: "red", margin: "1rem" }}>Error cargando convenios</p>
      ) : (
        <SearchAgreements agreements={formattedCompanies} />
      )}

      {/* 3. Renderizamos los botones dinámicamente basados en SubcategoriesAgreements */}
      {companySubcategories.map((subcategory) => (
        <Button
          key={subcategory.value}
          width="100%"
          onClick={() => navigate(`/conventions/multi-service/${subcategory.value}`)}
        >
          {subcategory.label.toUpperCase()}
        </Button>
      ))}

      <div className="list-convenios">
        <a
          href="https://drive.google.com/file/d/1oS7eDou0ABm7P-41MAcjCi7rTgp0uFPO/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faList} size="2x" />
          Lista de Convenios de empresas:
        </a>
      </div>
    </Container>
  );
};

const Container = styled.section`
    .list-convenios {
        color: dodgerblue;
        text-decoration: underline;
        text-transform: uppercase;
        margin: 1.5rem 0;
        font-size: 1em;
        a {
            margin-bottom: 1.5rem;
            display: flex;
            align-items: start;
            svg {
                margin-right: 1rem;
            }
        }
    }
`;