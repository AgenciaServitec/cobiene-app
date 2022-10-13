import React from "react";
import styled, { css } from "styled-components";
import Collapse from "antd/lib/collapse";
import Typography from "antd/lib/typography";
import { Button, SocialLink } from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "antd/lib/carousel";
import { ImgCarousel } from "./ImgCarousel";
import Parser from "html-react-parser";

const { Panel } = Collapse;
const { Text } = Typography;

export const ShowAndHiddenButton = ({
  dataLists = [],
  buttonType = "primary",
  contentAlign = "start",
  gripTemplateColumns = "1fr",
  paddingButton = ".8em 2em",
}) => {
  return (
    <CollapseAnt
      accordion
      bordered={false}
      expandIcon={null}
      contentAlign={contentAlign}
      gripTemplateColumns={gripTemplateColumns}
    >
      {dataLists.map((dataList, index) => {
        // console.log("dataList", dataList);
        return (
          <Panel
            key={index}
            header={
              <Button width="100%" type={buttonType} padding={paddingButton}>
                <div className="content-button">
                  {dataList.icon && (
                    <div className="item-img">
                      <FontAwesomeIcon icon={dataList.icon} />
                    </div>
                  )}
                  <div className="item-text">
                    <Text>
                      <h3>{dataList.title}</h3>
                    </Text>
                  </div>
                </div>
              </Button>
            }
            className="site-collapse-custom-panel"
          >
            {dataList.descriptions && (
              <ul className="description">
                {dataList.descriptions.map((description, index) => (
                  <li key={index}>{Parser(description)}</li>
                ))}
              </ul>
            )}

            {dataList.imgCarousels && (
              <SectionCarousel>
                <Carousel autoplay>
                  {dataList.imgCarousels.map((imgCarousel, index) => (
                    <ImgCarousel
                      key={index}
                      image={imgCarousel}
                      alt={dataList.title}
                    />
                  ))}
                </Carousel>
              </SectionCarousel>
            )}

            {dataList.listSocialLinks && (
              <SectionContact>
                <h4>CONTACTOS:</h4>
                {dataList.listSocialLinks.map((socialLink, index) => (
                  <SocialLink
                    key={index}
                    icon={socialLink.icon}
                    link={socialLink.link}
                    text={socialLink.text}
                  />
                ))}
              </SectionContact>
            )}
          </Panel>
        );
      })}
    </CollapseAnt>
  );
};

const CollapseAnt = styled(Collapse)`
  ${({ contentAlign, gripTemplateColumns }) => css`
    padding: 0.3em 0;
    .content-button {
      display: grid;
      grid-template-columns: ${gripTemplateColumns};
      justify-items: ${contentAlign};
      width: 100%;
      grid-column-gap: 2.5em;

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
      font-size: 1.3em;
      line-height: 1.3em;
      padding: 0 0.5em;
      text-align: justify;
      list-style: none;
      li {
        margin-bottom: 0.5em;
      }
    }
  `}
`;

const SectionCarousel = styled.div`
  padding: 0.7em 0.2em;
`;

const SectionContact = styled.div`
  h4 {
    font-weight: 700;
  }
`;
