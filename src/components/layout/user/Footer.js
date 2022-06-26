import React from "react";
import styled from "styled-components";
import { faBars, faPhone, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <Container>
      <div className="social-icons">
        <ul className="list-icon">
          <li className="item-icon">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </li>
          <li className="item-icon">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </li>
          <li className="item-icon">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </li>
          <li className="item-icon">
            <FontAwesomeIcon icon={faRetweet} size="2x" />
          </li>
        </ul>
        <p className="copyright-text">COPYRIGHT 2022. ALL RIGHTS RESERVED.</p>
        <p>
          <a>SERVITEC PERÚ</a>
        </p>
        <p>
          <a className="politicas">POLÍTICAS Y PRIVACIDAD</a>
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
  }
`;
