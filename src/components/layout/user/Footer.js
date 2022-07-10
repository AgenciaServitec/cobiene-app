import React from "react";
import styled from "styled-components";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container>
      <div className="social-icons">
        <ul className="list-icon">
          <li className="item-icon">
            <a href="https://www.facebook.com/BienestarEP">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </li>
          <li className="item-icon">
            <a href="https://api.whatsapp.com/send?phone=+51929054672&text=Hola%20ServiTecPeru%20Quiero%20Mas%20Info%20Sobre...">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </li>
          <li className="item-icon">
            <a href="https://www.youtube.com/c/Ej%C3%A9rcitodelPer%C3%BACanaloficial">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </li>
          <li className="item-icon">
            <span>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </span>
          </li>
          {/*<li className="item-icon">*/}
          {/*  <a href="">*/}
          {/*    <FontAwesomeIcon icon={faRetweet} size="2x" />*/}
          {/*  </a>*/}
          {/*</li>*/}
        </ul>
        <p>
          <Link to="/policies-and-privacy" className="politicas">
            POLÍTICAS Y PRIVACIDAD
          </Link>
        </p>

        <p className="copyright-text">
          Copyright 2022. Todos los derechos reservados - Diseñado con{" "}
          <FontAwesomeIcon icon={faHeart} size="sm" /> por{" "}
          <a href="https://agenciaservitec.com/">Agencia Servitec</a>.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;

  .social-icons {
    width: 100%;

    .list-icon {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;

      .item-icon {
        margin: 0 1rem;

        a,
        span {
          color: inherit;
        }
      }
    }
  }

  p {
    justify-content: center;
    text-align: center;

    a {
      color: white;
    }

    .politicas {
      text-decoration: none;
      font-size: small;
    }
  }

  .copyright-text {
    font-size: small;
    text-align: center;
    color: white;
    padding: 0.5rem;

    svg {
      color: red;
    }

    a {
      color: #d7b405;
    }
  }
`;
