import React from "react";
import { Button, Text, Title } from "../../components/public";
import { CobieneLogo } from "../../images";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";

export const MilitaryCircle = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content-initial">
        <img src={CobieneLogo} alt="Cobien logo" />
        <Title>Recreación</Title>
        {/* <div className="social-icons">
          <ul className="list-icon">
            <li className="item-icon">
              <a href="https://www.facebook.com/circulomilitardelperu/?locale2=es?LA">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
            <li className="item-icon">
              <a href="tel:+51012527992">
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </a>
            </li>
            <li className="item-icon">
              <a href="https://www.circulomilitardelperu.com/contacto">
                <FontAwesomeIcon icon={faGlobe} size="2x" />
              </a>
            </li>
          </ul>
        </div>*/}
        <Text>
          La Jefatura de Bienestar del Ejército brinda al personal de Oficiales,
          Supervisores, Técnicos, Sub Oficiales en situación de actividad o
          retiro y sus familiares directos, los centros de recreación mediante
          las instalaciones de sus diferentes círculos militares.
        </Text>
      </div>
      <Button
        width="100%"
        onClick={() => navigate("/military-circle/officers-circle")}
      >
        CÍRCULO MILITAR DE OFICIALES
      </Button>
      <Button
        width="100%"
        onClick={() => navigate("/military-circle/technicians-circle")}
      >
        CÍRCULO MILITAR DE SUP. TCOS. Y SSOO
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  .content-initial {
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
  }
  .social-icons {
    width: 100%;
    padding-top: 1rem;

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
`;
