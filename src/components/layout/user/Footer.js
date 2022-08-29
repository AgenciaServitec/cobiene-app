import React from "react";
import styled from "styled-components";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { IconListRow } from "../../ui";

export const Footer = () => {
  // const [visibleFormContact, setVisibleFormContact] =
  //   useGlobal("visibleFormContact");
  //
  // const handleVisibleFormContact = () =>
  //   setVisibleFormContact(!visibleFormContact);

  // const handleVisibleFormContact = () => console.log("PRUEBA");

  return (
    <Container>
      <div className="social-icons">
        <div className="social-links">
          <IconListRow
            icon={faFacebook}
            ariaLabel="boton de facebook"
            link="https://www.facebook.com/BienestarEP"
            background="#1877f2"
          />
          <IconListRow
            icon={faWhatsapp}
            ariaLabel="boton de whatsapp"
            link="https://api.whatsapp.com/send?phone=+51929054672&text=Hola%20ServiTecPeru%20Quiero%20Mas%20Info%20Sobre..."
            background="#00bb2d"
          />
          <IconListRow
            icon={faInstagram}
            ariaLabel="boton de instagram"
            link="https://www.instagram.com/cobiene_2022/"
            background="#c32aa3"
          />
          <IconListRow
            icon={faEnvelope}
            ariaLabel="boton de gmail"
            link="mailto:contacto@cobiene.mil.pe"
            background="#db4a39"
          />
        </div>
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
    .social-links {
      display: flex;
      justify-content: center;
      align-items: center;
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
  }
`;
