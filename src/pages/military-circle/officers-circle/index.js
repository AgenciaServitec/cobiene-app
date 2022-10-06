import React from "react";
import styled from "styled-components";
import {
  ImgCarousel,
  InitialContent,
  SocialLink,
} from "../../../components/public";
import { ImgOfficers } from "../../../images";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Carousel from "antd/lib/carousel";
import { campusCircleMilitary } from "../../../data-list";

const socialLinks = [
  {
    text: "Visita Nuestra Pagina Web",
    link: "https://www.circulomilitardelperu.com/",
    icon: faGlobe,
  },
  {
    text: "circulomilitardelperu",
    link: "https://m.facebook.com/circulomilitardelperu/?ref=page_internal",
    icon: faFacebook,
  },
  {
    text: "DESCARGAR NUESTRA APP",
    link: "https://play.google.com/store/apps/details?id=com.circulomilitar.acmp",
    icon: faGooglePlay,
  },
  {
    text: "01 6449277",
    link: "tel:016449277",
    icon: faPhone,
  },
];

export const OfficersCircle = () => {
  return (
    <Container>
      <InitialContent
        title="Círculo Militar de Oficiales"
        img={ImgOfficers}
        description="Somos una Asociación, creada para brindar bienestar a nuestros
          asociados y público en general, ofreciendo una gama de servicios de
          entretenimiento y recreación para toda la familia, como actividades
          deportivas, alojamiento, alimentación, peluquería, gimnasio, sauna,
          así como ambientes para celebraciones y eventos."
      />

      {campusCircleMilitary.map(({ images, title }, index) => (
        <div key={index}>
          <span>{title}</span>
          <Carousel autoplay>
            {images.map((image, index) => (
              <ImgCarousel key={index} image={image} alt={title} />
            ))}
          </Carousel>
        </div>
      ))}

      <span>Más Información:</span>
      <div className="link-list">
        {socialLinks.map((socialLink, index) => (
          <SocialLink
            key={index}
            text={socialLink.text}
            link={socialLink.link}
            icon={socialLink.icon}
          />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  span {
    display: block;
    font-size: 1.5rem;
    font-weight: 900;
    padding: 2.4em 0 1em 0;
  }
  .link-list {
    padding: 1.5em 1em;
  }
`;
