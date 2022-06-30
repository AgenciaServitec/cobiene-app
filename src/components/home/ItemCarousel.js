import React from "react";
import { Button, NavigateGoToLink, SocialLink } from "../ui";
import styled from "styled-components";

export const ItemCarousel = ({
  image,
  title1,
  title2,
  title3,
  socialLinks,
  buttonUrl,
}) => {
  return (
    <Container>
      <img src={image} alt={title2} />
      <div className="wrapper-titles">
        <h3>{title1}</h3>
        <h3>{title2}</h3>
        <h3>{title3}</h3>
      </div>
      <div className="link-list">
        {socialLinks.map((socialLink, index) => (
          <SocialLink
            key={index}
            text={socialLink.name}
            icon={socialLink.icon}
            link={socialLink.url}
          />
        ))}
      </div>

      <Button
        width="100%"
        onClick={() => {
          NavigateGoToLink(buttonUrl);
        }}
      >
        Descargar Formato
      </Button>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: auto;
  img {
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
