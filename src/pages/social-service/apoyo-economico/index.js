import React from "react";
import { SocialLink } from "../../../components";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

export const ApoyoEconomico = () => {
  return (
    <Container>
      <div className="content-logo">
        <h2>SERVICIO SOCIAL</h2>
        <p>
          Otorgamiento de ayuda económica social a los familiares directos del
          personal COBIENE y personal civil, nombrado y contratado en
          situaciones de actividad con recursos asignados al presupuesto del
          COBIENE
        </p>
      </div>
      <div className="content-help">
        <h3>AYUDA ECONOMICA</h3>
        <div>
          <h4>Rubros</h4>
          <strong>Ayuda Economica por Servicio:</strong>
          <p>
            Pago de sevicios medicos, pago de pensión por enseñanza y terapias,
            pagos de tratamientos de rehabilitación fisica, psicologica y
            psiquiatra.
          </p>
          <strong>Ayuda Economica por Adquisiones:</strong>
          <ol>
            <li>
              Adquisición de alimentos: sobre alimentación y suplementos
              nutricionales
            </li>
            <li>
              Adquisición de material insumos e instrumental (silla de ruedas,
              audifonos, zapatos ortopedicos, medicinas, pañales, muletas,
              andadores).
            </li>
          </ol>
        </div>
        <div>
          <h4>Alcance</h4>
          <ol>
            <li>
              Familiares directos del titular (Esposo(A)), hijos y por unica vez
              a los padres
            </li>
            <li>MONTO</li>
            <li>Maximo 2 UIT</li>
          </ol>
        </div>
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
    .content-help {
      padding: 0 1rem;
    }
    .link-list {
      padding: 1rem;
    }
  `}
`;
