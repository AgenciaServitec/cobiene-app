import React from "react";
import { SocialLink, Text } from "../../../components/public";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import { ImgLogoSad } from "../../../images";

export const DisabledSupport = () => (
  <Container>
    <div className="content-logo">
      <img src={ImgLogoSad} alt="Servicio de Discapacitado" />
      <h2>APOYO AL DISCAPACITADO</h2>
      <Text>
        La Sección de Apoyo al Personal con Discapacidad (SAD), brindará
        orientación y/o capacitación al personal militar pensionista en la
        condición de discapacidad sobre: salud, educación, pensión y otros
        beneficios que por ley le corresponda a fin de contribuir en el
        bienestar de la familia militar.
      </Text>
    </div>
    <div className="link-list">
      <SocialLink
        icon={faLocationDot}
        text="Av. Paseo de la Republica N° 874 - Sta. Beatriz LIMA"
        link="https://www.google.com.pe/maps/place/Av+Paseo+de+la+Rep%C3%BAblica+874,+Cercado+de+Lima+15046/@-12.0721923,-77.0334924,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c892e55c8e87:0x722a0796009b84a!8m2!3d-12.0721976!4d-77.0313037?hl=es-419"
      />
      <h3>SAD: </h3>
      <SocialLink icon={faPhone} text="013 328 109" link="tel:+51013328109" />
      <SocialLink
        icon={faEnvelope}
        text="DAPOYO@hotmail.com"
        link="mailto:dapoyo@hotmail.com"
      />
      <h3>CETPRO:</h3>
      <SocialLink icon={faPhone} text="013328108" link="tel:+51013328108" />
      <SocialLink
        icon={faEnvelope}
        text="CETPRO8DI@GHOTMAIL.COM"
        link="mailto:cetpro8di@hotmail.com"
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
    .link-list {
      padding: 1rem;
      font-size: 1rem;
    }
  `}
`;
