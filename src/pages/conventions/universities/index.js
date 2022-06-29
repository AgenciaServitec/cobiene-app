import React from "react";
import styled, { css } from "styled-components";
import Collapse from "antd/lib/collapse";
import { Button } from "../../../components";

const { Panel } = Collapse;

export const Universities = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <Container>
      <div className="content-logo">
        <h2>Universidades</h2>
      </div>
      <Collapse
        accordion
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={null}
        className="site-collapse-custom-collapse"
      >
        <Panel
          header={
            <Button width="100%" margin="0">
              <div className="content-button">
                <div className="item-icon">
                  <img
                    src="https://webapp.cobiene.mil.pe/imagenes/Universidades/logo1.png"
                    alt="Convenios cobiene"
                  />
                </div>
                <div className="item-text">AGRARIA LA MOLINA</div>
              </div>
            </Button>
          }
          key="1"
          className="site-collapse-custom-panel"
        >
          <p>{text}</p>
        </Panel>
        <Panel
          header={
            <Button width="100%" margin="0">
              <div className="content-button">
                <div className="item-icon">
                  <img
                    src="https://webapp.cobiene.mil.pe/imagenes/Universidades/logo1.png"
                    alt="Convenios cobiene"
                  />
                </div>
                <div className="item-text">AGRARIA LA MOLINA</div>
              </div>
            </Button>
          }
          key="2"
          className="site-collapse-custom-panel"
        >
          <p>{text}</p>
        </Panel>
        <Panel
          header={
            <Button width="100%" margin="0">
              <div className="content-button">
                <div className="item-icon">
                  <img
                    src="https://webapp.cobiene.mil.pe/imagenes/Universidades/logo1.png"
                    alt="Convenios cobiene"
                  />
                </div>
                <div className="item-text">AGRARIA LA MOLINA</div>
              </div>
            </Button>
          }
          key="3"
          className="site-collapse-custom-panel"
        >
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Container>
  );
};

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
            width: 70%;
            object-fit: contain;
          }
        }
        .item-text {
          display: flex;
          align-items: center;
          justify-content: start;
          font-size: 100%;
        }
      }
    }
  `}
`;
