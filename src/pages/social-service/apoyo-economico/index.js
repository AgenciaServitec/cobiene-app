import React from "react";
import { Button, SocialLink, Text } from "../../../components";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

export const EconomicalSupport = () => (
  <Container>
    <div className="content-logo">
      <h2>APOYO ECÓNOMICO</h2>
      <Text align="justify">
        El beneficio de la ayuda económica social, es el aporte económico
        parcial o total que proporciona el ejército, al familiar directo del
        personal militar en situación de actividad y retiro, así como al
        personal civil, nombrado, contratado y cesante en situaciones
        excepcionales de salud. Asimismo, a los sobrevivientes del titular
        fallecido en acción de armas, acto de servicio, a consecuencia del
        servicio u ocasión del servicio, coadyuvando con el tratamiento de los
        familiares directos (hijos y cónyuge), en casos excepcionales a los
        padres del titular, por un monto de hasta dos (02) uit.
      </Text>
    </div>
    <div className="content-help">
      <Button width="100%">AYUDA ECONÓMICA SOCIAL</Button>
      <Button width="100%">CONVENIOS MULTISERVICIOS</Button>
      <Button width="100%">SERVICIO RELIGIOSO</Button>
    </div>
    <div className="link-list">
      <SocialLink
        icon={faLocationDot}
        text="Av. de la policia Cdra.2 Jesús María (Velatorio del Hospital"
        link="https://www.google.com.pe/maps/place/Cuartel+Gral+Del+Ejercito,+San+Borja+15037/@-12.1007368,-76.9889964,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c7bf511ba59d:0x58c4fae03566984f!8m2!3d-12.1007421!4d-76.9868077?hl=es-419"
      />
      <SocialLink icon={faPhone} text="996 370 174" link="tel:+51996370174" />

      <SocialLink
        icon={faEnvelope}
        text="fossep1@gmail.com"
        link="mailto:das_jbiene@hotmail.com"
      />
    </div>
  </Container>
);

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
    .content-help {
      padding: 0 1rem;
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    }
    .link-list {
      padding: 1rem;
    }
  `}
`;
