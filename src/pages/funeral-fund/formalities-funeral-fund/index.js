import React from "react";
import {
  Button,
  IconList,
  NavigateGoToLink,
  SocialLink,
  Text,
} from "../../../components";
import styled, { css } from "styled-components";
import { FondoSepelio } from "../../../images";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const FormalitiesFuneralFund = () => {
  return (
    <Container>
      <div className="content-logo">
        <img src={FondoSepelio} alt="Apoyo educativo" />
        <h2>Tramites y informaciones</h2>
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

      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1BsxIrd0JsKyVUo1eDjaH3_YRaZV85eO7/view?usp=sharing"
          )
        }
      >
        Actividad y Montepio
      </Button>
      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1epM0isppcDkq4eEoqR6nWj3Kc4cqgyXE/view?usp=sharing"
          )
        }
      >
        Caja Pensión
      </Button>
      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1icg3ERdUxUy65bx-Yp-g-59CQsaP78hl/view?usp=sharing"
          )
        }
      >
        Nuevos Integrantes
      </Button>
      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/15ZU1g_iHweDc7r4pCy6qDJ8u2r6oLjRh/view?usp=sharing"
          )
        }
      >
        Desafiliaciones
      </Button>
      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/10PNfqaG_g8UQX4Bfh6RRuDjq7a4sESK_/view?usp=sharing"
          )
        }
      >
        Cambio de Titular
      </Button>
      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1ZTXsKj7O6VUBjFqyzwM0NZT3r3bBwW7m/view?usp=sharing"
          )
        }
      >
        Solicitud reembolso
      </Button>
      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1VZlRgrn5VB4XhD6j67qAQN29OWDeIq-K/view?usp=sharing"
          )
        }
      >
        Carta Renuncia
      </Button>
      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1JxCm4D8zXCxPHe6zFJ3qxQYIe3lKkuR1/view?usp=sharing"
          )
        }
      >
        Familiares Adicionales
      </Button>

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
