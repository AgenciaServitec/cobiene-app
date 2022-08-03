import React, { useState } from "react";
import styled, { css } from "styled-components";
import { CasaServicio, ImgMapa } from "../../../images";
import { Button, NavigateGoToLink } from "../../../components";

export const HouseServices = () => {
  const [buttonHidden, setButtonHidden] = useState(false);

  return (
    <Container>
      <div className="content-logo">
        <img src={CasaServicio} alt="Casa de Servicio" />
        <h2>Dace</h2>
        <p>
          El Departamento de Administración de Casas del COBIENE, brinda el
          servicio de asignación de casas de servicio temporalmente a la familia
          COBIENE, para lo cual cuenta con las Villas para Oficiales, Técnicos y
          Sub Oficiales.
        </p>
        <img src={ImgMapa} alt="Mapa" className="img-mapa" />
      </div>
      <Button width="100%" onClick={() => setButtonHidden(!buttonHidden)}>
        Requisitos para ser usuarios
      </Button>
      {buttonHidden && (
        <div className="content">
          <p>
            - Deberá encontrar en situación COBIENE de actividad con no mas de
            25 años de único como oficial de 28 años para el caso de los
            teóricos.
            <br />- Deberá ser casado (a) mantener una relación conyugal estable
            y vivir con su cónyuge e hijos en la guarnición donde solicita
            vivienda. - <br />
            El titular, esposa y familiares directos deberán estar debidamente
            inscritos en el registro de Familia del COBIENE.
            <br />
            - Deberá tener como mínimo cuatro (04) años de servicio cumplido
            como oficial, en el grado mínimo de teniente y SO2 para el caso de
            los SSOO.
            <br /> - Deberá prestar servicio en la guarnición donde solicita
            vivienda.
            <br /> - No debe habar ocupado casa de servicio en los tres (3)
            últimos años en la guarnición donde se solicita. <br /> - No haber
            sido favorecido con un programa (vivienda/préstamo) del ORES-FOVINE.
            <br /> -Acreditara haber devuelto la casa de servicio que haya
            ocupado en la Guarnición de procedencia.
          </p>
        </div>
      )}

      <Button
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
};

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;

    .content-logo {
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

      h2 {
        text-shadow: ${theme.text_shadow.shadow_green};
      }

      .img-mapa {
        width: 90%;
        max-width: 20rem;
      }

      p {
        color: ${theme.colors.white};
        text-align: justify;
      }
    }
  `}
`;
