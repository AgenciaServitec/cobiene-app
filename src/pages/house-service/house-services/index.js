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
      <div className="section-image">
        <img src={ImgSliderJace} alt="Img Jace" className="img-mapa" />
      </div>
      <Button width="100%" onClick={() => setViewContent(!viewContent)}>
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
      {/* <Button
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
      </Button>*/}
      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1dO4anLFLZZUZnZVgwkcAxNMNt7rnWvYY/view?usp=sharing"
          )
        }
      >
        Requisito para solicitar casa de servicio
      </Button>
      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1lWQCovfD74g8JzGZenuE5fz_kK1zmZMt/view?usp=sharing"
          )
        }
      >
        Requisito para acceder sirecase
      </Button>
      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1t_ZxhgX92TgHXL61mvzqbQsgIWJ0BxeB/view?usp=sharing"
          )
        }
      >
        Manual SIRECASE
      </Button>{" "}
      <Button
        width="100%"
        onClick={() => NavigateGoToLink("https://ws.ejercito.mil.pe/sirecase")}
      >
        Sistema de registro de casas del ejercito
      </Button>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;

  .section-image {
    display: flex;
    justify-content: center;
    .img-mapa {
      width: 100%;
      max-width: 24rem;
      margin: 1em auto;
    }
  }

  .section-requirements {
    padding: 2.5em 0.5em 2em 0.5em;
  }
  .item-requeriment {
    padding: 0 0.8em;
  }
`;
