import React from "react";
import styled from "styled-components";
import { ImgLogoJace, ImgSliderJace } from "../../../images";
import {
  Button,
  InitialContent,
  NavigateGoToLink,
  ShowAndHiddenButton,
} from "../../../components";
import Carousel from "antd/lib/carousel";
import { requerimentsJace } from "../../../data-list";

export const HouseServices = () => (
  <Container>
    <InitialContent
      title="JACE"
      img={ImgLogoJace}
      description=" La Jefatura de Administración de Casas del Ejército asesora al Comando de Bienestar del Ejército en los aspectos
            inherentes de la administración de casas de servicios del Ejército.
            Asimismo, planificará, ejecutará y supervisará los trabajos de
            conservación, mejoramiento y rehabilitación de la infraestructura,
            inmobiliaria de las casas de servicio de la guarnición de Lima, a fin
            de contribuir a la consecución de los objetivos de Bienestar del
            Ejército."
    />

    <Carousel autoplay>
      <img src={ImgSliderJace} alt="Img Jace" className="img-mapa" />
    </Carousel>

    <div className="section-requirements">
      <h3>Requisitos para ser usuario:</h3>
      <ShowAndHiddenButton
        dataLists={requerimentsJace}
        buttonType="tertiary"
        gripTemplateColumns="10% 1fr 10%"
      />
    </div>

    <Button
      type="secondary"
      width="90%"
      onClick={() =>
        NavigateGoToLink(
          "https://drive.google.com/file/d/1Sbv5-3Sg-r1yzTAX98fiPEU30ukz33k0/view?usp=sharing"
        )
      }
    >
      Formato de Solicitud
    </Button>

    <Button
      type="secondary"
      width="90%"
      onClick={() =>
        NavigateGoToLink(
          "https://drive.google.com/file/d/18ijZQMm8AzhtT8CtngmdiMlGDHVx4IP2/view?usp=sharing"
        )
      }
    >
      Formato de Devolución
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
