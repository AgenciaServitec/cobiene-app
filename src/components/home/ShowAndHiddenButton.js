import React from "react";
import styled from "styled-components";
import Collapse from "antd/lib/collapse";
import Typography from "antd/lib/typography";
import { Button } from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Panel } = Collapse;
const { Text } = Typography;

export const ShowAndHiddenButton = ({ requerimentsJace = [] }) => {
  return (
    <CollapseAnt accordion bordered={false} expandIcon={null}>
      {requerimentsJace.map((requeriment, index) => (
        <Panel
          key={index}
          header={
            <Button width="100%">
              <div className="content-button">
                <div className="item-img">
                  <FontAwesomeIcon icon={requeriment.icon} />
                </div>
                <div className="item-text">
                  <Text>
                    <h3>{requeriment.title}</h3>
                  </Text>
                </div>
              </div>
            </Button>
          }
          className="site-collapse-custom-panel"
        >
          <p className="description">{requeriment.description}</p>
        </Panel>
      ))}
    </CollapseAnt>
  );
};

const CollapseAnt = styled(Collapse)`
  padding: 0.3em 0;
  .content-button {
    display: flex;
    width: 100%;
    gap: 1.5em;
    .item-img {
      svg {
        font-size: 2.5em;
      }
    }
    .item-text {
      span {
        h3 {
          color: #fff;
        }
      }
    }
  }
  .description {
    font-size: 1.5em;
    line-height: 1.3em;
    padding: 0 0.5em;
    text-align: justify;
  }
`;
