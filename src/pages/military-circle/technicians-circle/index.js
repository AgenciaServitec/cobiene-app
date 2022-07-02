import styled from "styled-components";
import { Button, SocialLink, Title } from "../../../components";
import { ImgOfficers3, TechniciansImg } from "../../../images";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export const TechniciansCircle = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <Container>
      <div className="content-initial">
        <img src={TechniciansImg} alt="Tecnicos Oficiales" />
        <Title> Circulo de Superiores Tecnicos y Sub Oficiales</Title>
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
              icon={faGlobe}
              text="AV. Escuela S/N - Chorrillos"
              link="https://www.google.com/maps/dir/?api=1&destination=-12.167592963634%2C-77.018716326325"
            />
          </div>
        )}
        <Button width="100%">TARAPACÁ</Button>
        <Button width="100%">RIMAC</Button>
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
