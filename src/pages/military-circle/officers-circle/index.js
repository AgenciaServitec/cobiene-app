import React from "react";
import styled from "styled-components";
import { ImgCarousel, SocialLink, Text, Title } from "../../../components";
import {
  ImgOfficers,
  ImgOfficers1,
  ImgOfficers2,
  ImgOfficers3,
  ImgOfficers4,
  ImgOfficers5,
  ImgOfficers6,
} from "../../../images";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Carousel from "antd/lib/carousel";

export const OfficersCircle = () => {
  return (
    <Container>
      <div className="content-initial">
        <img src={ImgOfficers} alt="Circulo de Oficiales" />
        <Title>Círculo de Oficiales</Title>
        <Text>
          Somos una Asociación, creada para brindar bienestar a nuestros
          asociados y publico en general, ofreciendo una gama de servicios de
          entretenimiento y recreación para toda la familia, como actividades
          deportivas, alojamiento, alimentación, peluquería, gimnasio, sauna,
          así como ambientes para celebraciones y eventos.
        </Text>
      </div>

      <Carousel autoplay>
        <ImgCarousel image={ImgOfficers1} title="Arequipa" />
        <ImgCarousel image={ImgOfficers2} title="Salaverry" />
        <ImgCarousel image={ImgOfficers3} title="Chorrillos" />
        <ImgCarousel image={ImgOfficers4} title="Tiza" />
        <ImgCarousel image={ImgOfficers5} title="Ceande" />
        <ImgCarousel image={ImgOfficers6} title="Piura" />
      </Carousel>

      <span>Más Información:</span>
      <div className="link-list">
        <SocialLink
          text="Visita Nuestra Pagina Web"
          link="https://circulomilitardelperu.com/index.html"
          icon={faGlobe}
        />
        <SocialLink
          text="circulomilitardelperu"
          icon={faFacebook}
          link="https://m.facebook.com/circulomilitardelperu/?ref=page_internal"
        />
        <SocialLink
          text="DESCARGAR NUESTRA APP"
          link="https://play.google.com/store/apps/details?id=com.circulomilitar.acmp"
          icon={faGooglePlay}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  .content-initial {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
    img {
      width: 8em;
      height: auto;
      object-fit: contain;
      margin-bottom: 1rem;
    }
  }
  span {
    display: block;
    font-size: 1.5rem;
    padding-top: 2rem;
  }
  .link-list {
    padding: 1rem;
  }
`;
