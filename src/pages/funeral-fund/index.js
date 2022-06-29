import React from "react";
import { Button, NavigateGoToLink, SocialLink } from "../../components";
import styled, { css } from "styled-components";
import { FondoSepelio } from "../../images";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const FuneralFund = () => {
  return (
    <Container>
      <div className="content-logo">
        <img src={FondoSepelio} alt="Apoyo educativo" />
        <h2>Fossep</h2>
        <p>
          Otorgamiento de ayuda económica social a los familiares directos del
          personal cobiene y personal civil, nombrado y contratado en
          situaciones de actividad con recursos asignados al presupuesto del
          COBIENE
        </p>
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
          text="Av. de la policia Cdra.2 Jesús María (Velatorio del Hospital"
          link="https://www.google.com.pe/maps/place/Velatorio+Hospital+Militar/@-12.0861749,-77.0620123,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c900937c6be1:0xf2b7cf0aa981dc66!8m2!3d-12.0861802!4d-77.0598236?hl=es-419"
        />
        <SocialLink icon={faPhone} text="942 078 949" link="tel:+51942078949" />
        <SocialLink icon={faPhone} text="999 851 552" link="tel:+51999851552" />
        <SocialLink
          icon={faEnvelope}
          text="fossep1@gmail.com"
          link="mailto:fossep1@gmail.com"
        />
        <SocialLink
          icon={faGlobe}
          text="www.fossep.com.pe"
          link="https://www.fossep.com.pe/"
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
      }
      p {
        color: ${theme.colors.white};
        text-align: center;
      }
    }
    .link-list {
      padding: 1rem;
    }
  `}
`;
