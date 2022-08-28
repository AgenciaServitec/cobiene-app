import React from "react";
import styled from "styled-components";
import {
  ImgLogoJace,
  ImgSliderJace,
  ImgSliderJace2,
  ImgSliderJace3,
} from "../../../images";
import {
  Button,
  InitialContent,
  NavigateGoToLink,
  ShowAndHiddenButton,
} from "../../../components";
import Carousel from "antd/lib/carousel";
import { faFileInvoice, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { requerimentsJace } from "../../../data-list";

export const HouseServices = () => (
  <Container>
    <InitialContent
      title="Jace"
      img={ImgLogoJace}
      description=" La JACE asesora al Comando de Bienestar del Ejército en los aspectos
            inherentes de la administración de casas de servicios del Ejército.
            Asimismo, planificara, ejecutara y supervisara los trabajos de
            conservación, mejoramiento y rehabilitación de la infraestructura,
            inmobiliaria de las casas de servicio de la guarnición de Lima, a fin
            de contribuir a la consecución de los objetivos de Bienestar del
            Ejército."
    />

    <Carousel autoplay>
      <img src={ImgSliderJace} alt="Img Jace" className="img-mapa" />
      <img src={ImgSliderJace2} alt="Img Jace" className="img-mapa" />
      <img src={ImgSliderJace3} alt="Img Jace" className="img-mapa" />
    </Carousel>

    <div className="section-requirements">
      <h3>Requisitos para ser usuario:</h3>

      {/* {requerimentsJace.map((requerimentJace, index) => (
        <ShowAndHiddenButton
          key={index}
          title={requerimentJace.title}
          icon={requerimentJace.icon}
          description={requerimentJace.description}
        />
      ))}*/}
      <ShowAndHiddenButton requerimentsJace={requerimentsJace} />
    </div>

    <Button
      type="secondary"
      width="100%"
      onClick={() =>
        NavigateGoToLink(
          "https://drive.google.com/file/d/1BMuifWm1NTDkhUtynifpoRzutQiQ35Uw/view?usp=sharing"
        )
      }
    >
      Descargar Solicitud
    </Button>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: auto;

  .img-mapa {
    width: 100%;
    max-width: 24rem;
  }
  .section-requirements {
    padding: 2.5em 0.5em 2em 0.5em;
  }
`;
