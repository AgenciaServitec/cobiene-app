import React, { useState } from "react";
import styled from "styled-components";
import { ImgLogoJace, ImgSliderJace } from "../../../images";
import {
  Button,
  InitialContent,
  NavigateGoToLink,
  Text,
} from "../../../components/public";
import { requerimentsJace } from "../../../data-list";

export const HouseServices = () => {
  const [viewContent, setViewContent] = useState(false);
  return (
    <Container>
      <InitialContent
        title="JACE"
        img={ImgLogoJace}
        description="La Jefatura de Administración de Casas del Ejército, asesorará al Comando de Bienestar del Ejército en los aspectos inherentes a la administración de casas de servicio; asimismo planificará, ejecutará y supervisará los trabajos de conservación, mejoramiento y rehabilitación de la infraestructura de las casas de servicio de la guarnición de Lima, a fin de contribuir a la consecución de los objetivos de Bienestar del Ejército."
      />

      <img src={ImgSliderJace} alt="Img Jace" className="img-mapa" />

      {/*<div className="section-requirements">*/}
      {/*  <h3>Requisitos para ser usuario:</h3>*/}
      {/*  <ShowAndHiddenButton*/}
      {/*    dataLists={requerimentsJace}*/}
      {/*    buttonType="tertiary"*/}
      {/*    gripTemplateColumns="10% 1fr 10%"*/}
      {/*  />*/}
      {/*</div>*/}

      <Button
        type="secondary"
        width="100%"
        onClick={() => setViewContent(!viewContent)}
      >
        Requisitos para ser usuario:
      </Button>
      {viewContent && (
        <div className="content-display">
          {requerimentsJace.map((requeriment, index) => (
            <div key={index} className="item-requeriment">
              <h3>{requeriment.title}</h3>
              <Text>{requeriment.descriptions}</Text>
            </div>
          ))}
        </div>
      )}

      <Button
        type="secondary"
        width="100%"
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
        width="100%"
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
};

const Container = styled.section`
  width: 100%;
  height: auto;

  .img-mapa {
    width: 100%;
    max-width: 24rem;
    margin-bottom: 1em;
  }
  .section-requirements {
    padding: 2.5em 0.5em 2em 0.5em;
  }
  .item-requeriment {
    padding: 0 0.8em;
  }
`;
