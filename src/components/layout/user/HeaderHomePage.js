import styled from "styled-components";
import { CobieneLogo, ImgCuartelCobiene } from "../../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const HeaderHomePage = ({ onSetVisibleDrawer }) => {
  return (
    <Container>
      <img
        src={ImgCuartelCobiene}
        alt="Imagen Cuartel Cobiene"
        width="100%"
        height="100%"
      />
      <div className="content-right" onClick={() => onSetVisibleDrawer(true)}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <div className="horizontal-line"></div>
      <div className="img-box">
        <img src={CobieneLogo} alt="Logo Cobiene" width="100%" height="100%" />
      </div>
    </Container>
  );
};

const Container = styled.header`
  position: relative;
  img {
    width: 100%;
    height: 12rem;
  }
  .content-right {
    background-color: #7f9e47;
    padding: 0.7rem 1rem;
    border-radius: 0.7em;
    position: absolute;
    right: 4%;
    top: 5%;
    box-shadow: 2px 2px 3px #999;
  }
  .horizontal-line {
    width: 100%;
    height: 12px;
    background-color: #7f9e47;
  }
  .img-box {
    background: radial-gradient(#11581e, #041607);
    border: 9px solid #7f9e47;
    display: inline-block;
    padding: 1rem;
    border-radius: 50%;
    position: absolute;
    left: 5%;
    bottom: -27%;

    img {
      width: 5.5rem;
      height: 5.5rem;
      object-fit: contain;
    }
  }
`;
