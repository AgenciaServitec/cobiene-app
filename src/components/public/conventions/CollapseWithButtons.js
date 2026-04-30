import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Collapse from "antd/lib/collapse";
import { Button } from "../ui";
import Typography from "antd/lib/typography";
import Parser from "html-react-parser";

const { Panel } = Collapse;
const { Text } = Typography;

export const CollapseWithButtons = ({ dataLists = [] }) => {
  return (
    <CollapseAntd accordion bordered={false} expandIcon={null}>
      {(dataLists || []).map((dataList, index) => (
        <Panel
          key={index}
          header={
            <Button width="100%">
              {dataList.image ? (
                <div className="content-button">
                  <div className="item-icon">
                    <img
                      src={dataList.image}
                      alt={dataList.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="item-text">
                    <Text style={{ width: 300 }} ellipsis>
                      {dataList.title}
                    </Text>
                  </div>
                  <div />
                </div>
              ) : (
                <div className="content-button-no-image">
                  <Text style={{ width: 300 }} ellipsis>
                    {dataList.title}
                  </Text>
                </div>
              )}
            </Button>
          }
          className="site-collapse-custom-panel"
        >
          <div className="content-description">
            {dataList.titleContent ? (
              <h3>{dataList.titleContent}</h3>
            ) : (
              <h3>{dataList.title}</h3>
            )}
            {dataList.alert && <h2>"{dataList.alert}"</h2>}
            {dataList.benefits && (
              <div>
                <ul className="list-benefits">
                  {dataList.benefits.map((benefit, index) => (
                    <li key={index}>{Parser(benefit)}</li>
                  ))}
                </ul>
              </div>
            )}

            {dataList.links &&
              dataList.links.map(
                (link, index) =>
                  link.url && (
                    <div className="item-link" key={index}>
                      <a href={link.url} rel="noreferrer" target="_blank">
                        <FontAwesomeIcon
                          icon={link.icon ? link.icon : faGlobe}
                          size="2x"
                        />
                        {link.text ? link.text : "Visita nuestra pagina web"}
                      </a>
                    </div>
                  )
              )}

            {dataList.urlFile && (
              <div className="item-link">
                <a
                  href={dataList.urlFile}
                  rel="noreferrer"
                  download="Convenio-universidad.pdf"
                >
                  <FontAwesomeIcon icon={faDownload} size="2x" />
                  Descargar Ficha de Solicitud
                </a>
              </div>
            )}

            {dataList.qrCode && (
              <QrContainer>
                <p>Escanea el código QR para registrarte:</p>
                <a href={dataList.qrLink} target="_blank" rel="noreferrer">
                  <img src={dataList.qrCode} alt={`QR ${dataList.title}`} />
                </a>
                {dataList.qrLink && <small>O haz clic en la imagen</small>}
              </QrContainer>
            )}
          </div>
        </Panel>
      ))}
    </CollapseAntd>
  );
};

const CollapseAntd = styled(Collapse)`
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
      .img-default {
        width: 2em;
        height: 2em;
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
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  .content-button-no-image {
    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  .content-description {
    h3 {
      text-align: center;
      line-height: 2em;
      text-transform: uppercase;
    }
    div {
      .list-benefits {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 0.8rem;
        li {
          text-align: justify;
          margin-bottom: 0.5rem;
          font-weight: 500;
          overflow: hidden;

          .rimac {
            margin: auto;
            display: flex;
            justify-content: center;
          }
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
  border-top: 1px dashed ${({ theme }) => theme.colors.white || "#ccc"};

  p {
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 0.9rem;
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
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.7;
    font-size: 0.7rem;
  }
`;
