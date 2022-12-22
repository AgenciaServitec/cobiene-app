import React from "react";
import { LogoBazar } from "../../images";
import styled, { css } from "styled-components";
import { SocialLink } from "../../components/public";
import { faGlobeAmericas, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export const Bazar = () => {
  return (
    <Container>
      <div className="content-initial">
        <img src={LogoBazar} alt="Logo Bazar" />
        <h2>BAZAR CENTRAL</h2>
        <text>
          Proporcionar bienestar a través de la comercialización de productos de
          la primera necesidad a precios competitivos y otras actividades
          comerciales que aporten al bienestar del personal y familia cobiene
        </text>
        {/*<img src={ImgBazar} className="img-bazar" alt="Bazar" />*/}
      </div>
      <div className="link-list">
        <SocialLink
          icon={faGlobeAmericas}
          text="TUBAZAR.COM.PE"
          link="http://www.tubazar.com.pe/"
        />
        <SocialLink
          icon={faFacebook}
          text="BAZAR-CENTRAL"
          link="https://www.facebook.com/bce.tubazar/"
        />

        <SocialLink
          icon={faPlay}
          text="TU BAZAR"
          link="https://play.google.com/store/apps/details?id=pe.com.tubazar"
        />
      </div>
    </Container>
  );
};
const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    .content-initial {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1rem auto;
      img {
        width: 11em;
        height: auto;
        object-fit: contain;
        margin-bottom: 1rem;
      }
      h2 {
        text-shadow: ${theme.text_shadow.shadow_green};
      }
      text {
        color: ${theme.colors.white};
        text-align: justify;
        justify-content: center;
        padding: 1rem 0;
      }
      //.img-bazar {
      //  width: 100%;
      //  padding: 1rem 0;
      //}
    }
    .link-list {
      padding: 0 1rem;
      font-size: 15px;
    }
  `}
`;
