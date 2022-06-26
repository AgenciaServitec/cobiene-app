import React from "react";
import styled from "styled-components";
import { GamontLlantasLogo } from "../../../images";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { contactData } from "../../../firebase";

export const Footer = () => {
  return (
    <Container>
      <div className="item-logo-footer">
        <div className="item-logo">
          <img
            src={GamontLlantasLogo}
            alt="Gamont llanta logo"
            width="100%"
            height="100%"
          />
        </div>
        <div className="item-text">
          <p>
            Somos una empresa importadora y comercializadora de neumáticos y
            aros con experiencia en el mercado automotriz.
          </p>
        </div>
      </div>
      <div className="list-menu">
        <ul>
          <li>
            <span>
              <a href="#">TERMINOS Y CONDICIONES</a>
            </span>
          </li>
          <li>
            <span>
              <a href="#">POLITICA Y PRIVACIDAD</a>
            </span>
          </li>
          <li>
            <span>
              <a href="#contact">CONTACTO</a>
            </span>
          </li>
        </ul>
      </div>
      <div className="items-socials">
        <ul>
          <li>
            <a
              href={contactData.socialLinks.whatsapp}
              target="_blank"
              aria-label="Boton de Whatsapp"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a
              href={contactData.socialLinks.facebook}
              target="_blank"
              aria-label="Boton de Facebook"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href={contactData.socialLinks.instagram}
              target="_blank"
              aria-label="Boton de Instagram"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom-footer">
        <div>
          © Copyright 2022 - Gamont Llanta / Diseñado con{" "}
          <FontAwesomeIcon icon={faHeart} color="red" /> por{" "}
          <a
            href={contactData.poweredBy.webUrl}
            target="_blank"
            rel="noreferrer"
          >
            {contactData.poweredBy.name}
          </a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 15.86%, #090808 100%);
  padding: 4rem 0 0 0;
  .item-logo-footer {
    margin: auto;
    .item-logo {
      display: flex;
      justify-content: center;
      img {
        width: 20rem;
        height: auto;
        margin: 0.5rem 0 1.5rem 0;
      }
    }
    .item-text {
      text-align: center;
      p {
        width: 100%;
        max-width: 17rem;
        margin: auto;
        font-size: 0.8rem;
      }
    }
  }

  .list-menu {
    width: 100%;
    margin: 3rem auto;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      &:after {
        content: "";
        width: 50%;
        max-width: 30rem;
        height: 1px;
        background: #fff;
        bottom: 0;
        text-align: center;
        position: absolute;
        margin-top: 2rem;
      }
      li {
        margin-bottom: 1.7rem;
        span a {
          color: #fff;
          border-right: 1px solid #fff;
          padding: 0 1rem;
          font-size: 0.8rem;
        }
        &:last-child {
          span a {
            border-right: none;
          }
        }
      }
    }
  }
  .items-socials {
    width: 100%;
    margin: 3rem auto;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      position: relative;
      li a {
        color: #fff;
        padding: 0 1rem;
        font-size: 2.5rem;
      }
    }
  }
  .bottom-footer {
    width: 100%;
    padding: 1.5rem;
    div {
      width: 100%;
      text-align: center;
      font-size: 0.8rem;
      a {
        font-weight: 500;
        color: #fad249;
      }
    }
  }
`;
