import React from "react";
import { Button, NavigateGoToLink, SocialLink } from "../ui";
import styled from "styled-components";
import Carousel from "antd/lib/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const ItemCarousel = ({
  image,
  title1,
  title2,
  title3,
  socialLinks,
  buttonUrl,
  imgCarousels,
}) => {
  return (
    <Container>
      <img src={image} alt={title2} className="content-one-image" />

      <div className="wrapper-titles">
        {title1 && <h3>{title1}</h3>}
        {title2 && <h3>{title2}</h3>}
        {title3 && <h3>{title3}</h3>}
      </div>

      {imgCarousels && (
        <Carousel
          autoplay
          arrows
          prevArrow={<FontAwesomeIcon icon={faChevronLeft} color="#000" />}
          nextArrow={<FontAwesomeIcon icon={faChevronRight} color="#000" />}
        >
          {imgCarousels.map((imgCarousel, index) => (
            <div key={index} className="image-corporative">
              <img src={imgCarousel} alt={title2} />
            </div>
          ))}
        </Carousel>
      )}
      <div className="link-list">
        {socialLinks &&
          socialLinks.map((socialLink, index) => (
            <SocialLink
              key={index}
              text={socialLink.name}
              icon={socialLink.icon}
              link={socialLink.url}
            />
          ))}
      </div>

      {buttonUrl && (
        <Button
          width="90%"
          onClick={() => {
            NavigateGoToLink(buttonUrl);
          }}
        >
          Descargar Formato
        </Button>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 0.3em;

  .content-one-image {
    width: 60%;
    height: 10em;
    max-width: 9em;
    max-height: 9em;
    object-fit: contain;
    margin: 1em auto;
  }
  .wrapper-titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      text-transform: capitalize;
      text-align: center;
      font-size: 1.2rem;
      line-height: 1.7em !important;
    }
  }
  .image-corporative {
    width: 95%;
    height: 14em;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
      max-width: 40em;
      object-fit: cover;
      margin: 1em auto;
    }
  }

  .link-list {
    margin: 1.5rem auto;
    padding: 0 1rem;
  }
`;
