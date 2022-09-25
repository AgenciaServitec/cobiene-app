import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Collapse from "antd/lib/collapse";
import { Button } from "../ui";
import Typography from "antd/lib/typography";
import { ImgDefault } from "../../images";

const { Panel } = Collapse;
const { Text } = Typography;

export const CollapseWithButtons = ({ dataLists = [] }) => {
  return (
    <CollapseAntd accordion bordered={false} expandIcon={null}>
      {dataLists.map((dataList, index) => (
        <Panel
          key={index}
          header={
            <Button width="100%">
              <div className="content-button">
                <div className="item-icon">
                  {dataList.image ? (
                    <img src={dataList.image} alt={dataList.title} />
                  ) : (
                    <img
                      src={ImgDefault}
                      alt="img-default"
                      className="img-default"
                    />
                  )}
                </div>
                <div className="item-text">
                  <Text style={{ width: 300 }} ellipsis>
                    {dataList.title}
                  </Text>
                </div>
                <div />
              </div>
            </Button>
          }
          className="site-collapse-custom-panel"
        >
          <div className="content-description">
            <div>
              <h4>BENEFICIOS:</h4>
            </div>
            <div>
              <ul className="list-benefits">
                {dataList.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            {dataList.urlFile && (
              <div className="item-link">
                <a href={dataList.urlFile} rel="noreferrer">
                  <FontAwesomeIcon icon={faDownload} size="2x" />
                  Descargar Ficha de Solicitud
                </a>
              </div>
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
        max-width: 277px;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  .content-description {
    div {
      .list-benefits {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 0.87rem;
        li {
          text-align: justify;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
      }
    }
    .item-link {
      color: dodgerblue;
      text-decoration: underline;
      text-transform: uppercase;
      text-align: center;
      margin: 1.5rem 0;
      font-size: 1em;
      svg {
        margin-right: 1rem;
      }
    }
  }
`;
