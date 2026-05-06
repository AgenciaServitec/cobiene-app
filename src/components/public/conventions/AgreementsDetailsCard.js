import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCalendarAlt,
  faUsers,
  faGlobe,
  faChevronDown,
  faChevronUp,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui";
import Typography from "antd/lib/typography";
import Parser from "html-react-parser";

const { Text } = Typography;

export const AgreementDetailsCard = ({ agreement }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    title,
    logoPhoto,
    companyBenefits,
    educationalInstitutionBenefits,
    scope,
    startDate,
    endDate,
    contact,
    qrCode,
    qrLink
  } = agreement;

  return (
    <CardContainer>
      <Button width="100%" onClick={() => setIsOpen(!isOpen)}>
        {logoPhoto?.url ? (
          <div className="content-button">
            <div className="item-icon">
              <img src={logoPhoto.url} alt={title} loading="lazy" />
            </div>
            <div className="item-text">
              <Text style={{ width: 300, color: "white" }} ellipsis>
                {title}
              </Text>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} style={{ color: "white", fontSize: "1.2rem" }} />
            </div>
          </div>
        ) : (
          <div className="content-button-no-image" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ width: 300, color: "white" }} ellipsis>
              {title}
            </Text>
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} style={{ color: "white", fontSize: "1.2rem" }} />
          </div>
        )}
      </Button>

      {isOpen && (
        <div className="content-description">
          <h3>{title}</h3>
          {companyBenefits && (
            <div>
              <div className="list-benefits">
                {Parser(companyBenefits)}
              </div>
            </div>
          )}
          {educationalInstitutionBenefits?.length > 0 && (
            <div style={{ marginTop: '1.5rem' }}>
              <div className="item-link" style={{ margin: '0.5rem auto' }}>
                <span style={{ color: 'dodgerblue' }}>
                  <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                  Beneficios Educativos:
                </span>
              </div>
              <div className="list-benefits">
                {educationalInstitutionBenefits.map((benefit, index) => (
                  <BenefitItem key={index}>
                    <div className="discount-badge">
                      Descuento: {benefit.discount}
                    </div>
                    <div className="benefit-desc">
                      {Parser(benefit.description)}
                    </div>
                  </BenefitItem>
                ))}
              </div>
            </div>
          )}
          {scope && (
            <div style={{ marginTop: '1.5rem' }}>
              <div className="item-link" style={{ margin: '0.5rem auto' }}>
                <span style={{ color: 'dodgerblue' }}>
                  <FontAwesomeIcon icon={faUsers} size="2x" />
                  Alcance:
                </span>
              </div>
              <div className="list-benefits">
                {Parser(scope)}
              </div>
            </div>
          )}
          {(startDate || endDate) && (
            <div className="item-link">
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
                Vigencia: {startDate} al {endDate}
              </span>
            </div>
          )}
          {contact?.phones?.length > 0 && contact.phones[0] !== "" && (
            <div className="item-link">
              <span>
                <FontAwesomeIcon icon={faPhone} size="2x" />
                Teléfonos: {contact.phones.join(" / ")}
              </span>
            </div>
          )}
          {contact?.emails?.length > 0 && contact.emails[0] !== "" && (
            <div className="item-link">
              <span>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                Correos: {contact.emails.join(" / ")}
              </span>
            </div>
          )}
          {(qrCode?.url || qrLink) && (
            <QrContainer>
              {qrCode?.url && (
                <>
                  <p>Escanea el código QR para registrarte:</p>
                  <a href={qrLink || "#"} target="_blank" rel="noreferrer">
                    <img src={qrCode.url} alt={`QR ${title}`} />
                  </a>
                  {qrLink && <small>O haz clic en la imagen</small>}
                </>
              )}

              {qrLink && !qrCode?.url && (
                <div className="item-link" style={{ justifyContent: 'center', width: '100%' }}>
                  <a href={qrLink} rel="noreferrer" target="_blank" style={{ margin: 'auto' }}>
                    <FontAwesomeIcon icon={faGlobe} size="2x" />
                    Visitar enlace
                  </a>
                </div>
              )}
            </QrContainer>
          )}
        </div>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
    margin-bottom: 0.5rem;

    .content-button {
        width: 100%;
        display: grid;
        grid-template-columns: 10% 1fr 10%;
        grid-column-gap: 1.5rem;
        position: relative;
        .item-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            img {
                width: 3rem;
                height: 3rem;
                object-fit: contain;
            }
        }
        .item-text {
            display: flex;
            align-items: center;
            justify-content: start;
            text-align: left;
            text-transform: uppercase;
            span {
                text-transform: uppercase;
                max-width: 277px;
                color: ${({ theme }) => theme.colors?.white || "white"};
            }
        }
    }

    .content-button-no-image {
        span {
            color: ${({ theme }) => theme.colors?.white || "white"};
        }
    }

    .content-description {
        padding: 1rem;
        color: ${({ theme }) => theme.colors?.white || "white"};

        h3 {
            text-align: center;
            line-height: 2em;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors?.white || "white"};
        }

        div {
            .list-benefits {
                list-style: none;
                margin: 0;
                padding: 0;
                font-size: 0.8rem;
                text-align: justify;
                margin-bottom: 0.5rem;
                font-weight: 500;

                p {
                    margin-bottom: 0.5rem;
                }
            }
        }

        .item-link {
            color: dodgerblue;
            text-transform: uppercase;
            text-align: start;
            margin: 1.3rem auto;
            font-size: 1em;
            padding-left: 1em;
            a,
            span {
                display: grid;
                grid-template-columns: 13% 1fr;
                align-items: center;
            }
        }
    }
`;

const QrContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 1rem;
    border-top: 1px dashed ${({ theme }) => theme.colors?.white || "#ccc"};

    p {
        font-weight: bold;
        margin-bottom: 1rem;
        text-transform: uppercase;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors?.white || "white"};
    }

    img {
        width: 180px;
        height: 180px;
        background-color: white;
        padding: 10px;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
        cursor: pointer;

        &:hover {
            transform: scale(1.05);
        }
    }

    small {
        margin-top: 0.8rem;
        color: ${({ theme }) => theme.colors?.white || "white"};
        opacity: 0.7;
        font-size: 0.7rem;
    }
`;

const BenefitItem = styled.div`
  background: rgba(255, 255, 255, 0.05); 
  border-left: 4px solid #88a853; 
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0 4px 4px 0;

  .discount-badge {
    color: #88a853;
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  
  .benefit-desc {
    color: ${({ theme }) => theme.colors?.white || "white"};
  }
`;