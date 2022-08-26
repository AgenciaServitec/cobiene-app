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
        <Title> Círculo de Superiores Técnicos y Sub Oficiales</Title>
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
              text="(01) 252 7992"
              link="tel:+51012527992"
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
              text="COEDE, Hipolito Unanue, 15063"
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
              text="(01) 540 6256"
              link="tel:+51015406256"
            />
            <SocialLink
              icon={faEnvelope}
              text="cmsts.sedetarapaca@gmail.com"
              link="mailto:cmsts.sedetarapaca@gmail.com"
            />
            <SocialLink
              icon={faFacebook}
              text="Campo deportivo Tarapacá"
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
          RIMAC
        </Button>
        {hidden3 && (
          <div className="items-sedes">
            <img src={ImgRimac} alt="Sede de Rimac" />
            <h4>CONTACTOS:</h4>
            <SocialLink
              icon={faPhone}
              text="(01) 482 8896"
              link="tel:+51014828896"
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
              text="AV. Morro de Arica N° 499 - Rimac"
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
