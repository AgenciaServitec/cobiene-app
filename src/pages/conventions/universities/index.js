import React from "react";
import styled, { css } from "styled-components";
import Collapse from "antd/lib/collapse";
import { Button } from "../../../components";
import { conventions } from "../../../data-list";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Panel } = Collapse;

export const Universities = () => (
  <Container>
    <div className="content-logo">
      <h2>Universidades</h2>
    </div>
    <Collapse
      accordion
      bordered={false}
      expandIcon={null}
      className="site-collapse-custom-collapse"
    >
      {conventions.map((convention, index) => (
        <Panel
          key={index}
          header={
            <Button width="100%" margin="0">
              <div className="content-button">
                <div className="item-icon">
                  <img src={convention.image} alt={convention.title} />
                </div>
                <div className="item-text">
                  <h5>{convention.title}</h5>
                </div>
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
                {convention.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="item-link">
              <a href={convention.urlFile} rel="noreferrer">
                <FontAwesomeIcon icon={faDownload} size="2x" />
                Descargar Ficha de Solicitud
              </a>
            </div>
          </div>
        </Panel>
      ))}
    </Collapse>
  </Container>
);

const Container = styled.div`
  ${() => css`
    width: 100%;
    height: auto;
    .content-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1rem auto;

      h2 {
        text-align: center;
      }
    }

    .site-collapse-custom-collapse {
      .content-button {
        display: grid;
        grid-template-columns: 17% 1fr;
        grid-column-gap: 1rem;
        position: relative;
        .item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 4rem;
            height: 4rem;
            object-fit: contain;
          }
        }
        .item-text {
          display: flex;
          align-items: center;
          justify-content: start;
          font-size: 100%;
          h5 {
            text-align: left;
            width: 95%;
            max-width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 0;
          }
        }
      }
      .content-description {
        div {
          .list-benefits {
            list-style: none;
            margin: 0;
            padding: 0;
            font-size: 0.77rem;
            li {
              margin-bottom: 0.5rem;
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
    }
  `}
`;
