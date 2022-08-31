import React from "react";
import { Button, NavigateGoToLink, SocialLink } from "../ui";
import styled from "styled-components";

export const ItemCarousel = ({
  image,
  image2,
  title1,
  title2,
  title3,
  socialLinks,
  buttonUrl,
}) => {
  return (
    <Container>
      {image2 ? (
        <div className="content-two-image">
          <div className="top-image">
            <img src={image} alt={title2} />
          </div>
          <div className="botton-image">
            <img src={image2} alt={title2} />
          </div>
        </div>
      ) : (
        <img src={image} alt={title2} className="content-one-image" />
      )}
      <div className="wrapper-titles">
        <h3>{title1}</h3>
        <h3>{title2}</h3>
        <h3>{title3}</h3>
      </div>
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

  .content-two-image {
    width: 100%;
    .top-image {
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
        max-width: 6em;
        max-height: 6em;
        object-fit: contain;
        margin: 1em auto;
      }
    }
    .botton-image {
      img {
        width: 100%;
        height: 100%;
        max-width: 25em;
        max-height: 15em;
        object-fit: contain;
        margin: 1em auto;
      }
    }
  }
  .content-one-image {
    width: 60%;
    height: 20em;
    max-width: 20em;
    max-height: 20em;
    object-fit: contain;
    margin: 1em auto;
  }
  .wrapper-titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      text-align: center;
      font-size: 1.2rem;
    }
  }

  .link-list {
    margin: 1rem auto;
    padding: 0 1rem;
  }
`;
