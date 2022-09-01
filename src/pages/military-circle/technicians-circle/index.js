import styled from "styled-components";
import { Button, SocialLink, Title } from "../../../components";
import {
  ImgOfficers3,
  ImgRimac,
  ImgTarapaca,
  TechniciansImg,
} from "../../../images";
import {
  faCircleDown,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export const TechniciansCircle = () => {
  const [hidden, setHidden] = useState(false);
  const [hidden2, setHidden2] = useState(false);
  const [hidden3, setHidden3] = useState(false);
  return (
    <Container>
      <div className="content-initial">
        <img src={TechniciansImg} alt="Tecnicos Oficiales" />
        <Title> Círculo Militar de Supervisores Técnicos y Sub Oficiales</Title>
      </div>
      <div className="section-sedes">
        <h3>SEDES</h3>

        <Button width="100%" onClick={() => setHidden(!hidden)}>
          CHORRILLOS
        </Button>
        {hidden && (
          <div className="items-sedes">
            <img src={ImgOfficers3} alt="Sede de Chorrillos" />
            <h4>CONTACTOS:</h4>
            <SocialLink
              icon={faPhone}
              text="998 461 170"
              link="tel:+51998461170"
            />
            <SocialLink
              icon={faEnvelope}
              text="certes_chorrillos@outlook.com"
              link="mailto:certes_chorrillos@outlook.com"
            />
            <SocialLink
              icon={faFacebook}
              text="Certes Chorrillos"
              link="https://www.facebook.com/Certes-Chorrillos-710927646021330"
            />
            <SocialLink
              icon={faLocationDot}
              text="Av. Escuela Militar S/N Chorrillos"
              link="https://www.google.com/maps/dir/?api=1&destination=-12.167592963634%2C-77.018716326325"
            />
          </div>
        )}
        <Button width="100%" onClick={() => setHidden2(!hidden2)}>
          TARAPACÁ
        </Button>
        {hidden2 && (
          <div className="items-sedes">
            <img src={ImgTarapaca} alt="Sede de Tarapaca" />
            <h4>CONTACTOS:</h4>
            <SocialLink
              icon={faPhone}
              text="998 556 087"
              link="tel:+51998556087"
            />
            <SocialLink
              icon={faEnvelope}
              text="cmsts.sedetarapaca@gmail.com"
              link="mailto:cmsts.sedetarapaca@gmail.com"
            />
            <SocialLink
              icon={faFacebook}
              text="Av. Prolongación Defensores del Morro N° 1170 Chorrillos"
              link="https://www.facebook.com/Campo-Deportivo-Tarapaca-Chorrillos-101277401232183/"
            />
            <SocialLink
              icon={faLocationDot}
              text="AV. Prolongación Defensores del Morro 1170 -  Chorrillos"
              link="https://www.google.com/maps/dir/?api=1&destination=-12.194105661443%2C-77.00196146965"
            />
            <SocialLink
              icon={faCircleDown}
              text="Descargar Ficha de Inscripción"
              link="https://drive.google.com/file/d/1B2v9KxLs0xr0AfKlY-uhdikXAbqKNOk1/view?usp=sharing"
            />
          </div>
        )}

        <Button width="100%" onClick={() => setHidden3(!hidden3)}>
          RÍMAC
        </Button>
        {hidden3 && (
          <div className="items-sedes">
            <img src={ImgRimac} alt="Sede de Rimac" />
            <h4>CONTACTOS:</h4>
            <SocialLink
              icon={faPhone}
              text="925 739 072"
              link="tel:+51925739072"
            />
            <SocialLink
              icon={faEnvelope}
              text="cmstsrimac@gmail.com"
              link="mailto:cmstsrimac@gmail.com"
            />
            <SocialLink
              icon={faFacebook}
              text="Certes Rimac"
              link="https://www.facebook.com/Circulo-militar-de-supervisores-tecnicos-y-suboficiales-rimac-103401924608565/"
            />
            <SocialLink
              icon={faLocationDot}
              text="Av. Morro de Arica S/N - Rímac"
              link="https://www.google.com/maps/dir/?api=1&destination=-12.02172%2C-77.03317"
            />
          </div>
        )}
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
  .section-sedes {
    h3 {
      text-align: center;
    }
    .items-sedes {
      padding: 0.5rem 1rem;
      img {
        width: 100%;
      }
      h4 {
        padding-top: 1rem;
      }
    }
  }
`;
