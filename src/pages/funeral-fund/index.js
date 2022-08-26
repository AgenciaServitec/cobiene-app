import React from "react";
import {
  Button,
  IconList,
  NavigateGoToLink,
  SocialLink,
  Text,
} from "../../components";
import styled, { css } from "styled-components";
import { FondoSepelio } from "../../images";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";

export const FuneralFund = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="content-logo">
        <img src={FondoSepelio} alt="Apoyo educativo" />
        <h2>Fondo Solidario De Sepelio Del Ejército Del Perú</h2>
        <Text>
          Institución de apoyo solidario y sentido humanista, creado para
          atender los casos de fallecimiento de sus afiliados. Pueden afiliarse
          de manera voluntaria el personal de oficiales, técnicos, sub
          oficiales, empleados civiles y sus familiares directos excepto los
          mayores de 75 años.
        </Text>
      </div>

      <div className="servicies-section">
        <Text>El Fossep brinda los siguientes servicios:</Text>
        <Button width="100%">Servicio de inumación</Button>
        <Button width="100%">Servicio de decremación</Button>
        <Button
          width="100%"
          onClick={() => navigate("./formalities-funeral-fund")}
        >
          Tramites y Informaciones
        </Button>
      </div>

      <div className="icon-section">
        <h2>Contáctanos:</h2>
        <div className="icon-content">
          <IconList
            icon={faLocationDot}
            link="https://goo.gl/maps/7bTNPRKRks8WrJer5"
            text="botón de ubicación"
          />
          <IconList
            icon={faEnvelope}
            link="mailto:fossep1@gmail.com"
            text="botón de email"
          />
          <IconList
            icon={faGlobe}
            link="https://www.fossep.com.pe/"
            text="botón de pagina web"
          />
          <IconList
            icon={faPhone}
            link="tel:014631560"
            text="botón de telefono"
          />
          <IconList
            icon={faWhatsapp}
            link="https://api.whatsapp.com/send?phone=+51958465839&text=Hola%21%20Quisiera%20más%20información.%20"
            text="botón de WhatsApp"
          />
        </div>
      </div>

      <div className="link-list">
        <SocialLink
          icon={faLocationDot}
          text="Av. de la policia Cdra.2 Jesús María (Velatorio del Hospital)"
          link="https://goo.gl/maps/7bTNPRKRks8WrJer5"
        />
      </div>
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
        text-align: center;
      }
      p {
        color: ${theme.colors.white};
        text-align: center;
      }
    }
    .servicies-section {
      padding-bottom: 2em;
    }
    .icon-section {
      h2 {
        line-height: 2.2rem;
      }
      .icon-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 1rem;
      }
    }

    .link-list {
      padding: 1rem;
    }
  `}
`;
