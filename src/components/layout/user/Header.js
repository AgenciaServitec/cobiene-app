import React from "react";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CobieneLogo } from "../../../images";

export const Header = ({ onSetVisibleDrawer }) => {
  return (
    <Container>
      <div className="content-left">
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          onClick={() => onSetVisibleDrawer(true)}
        />
      </div>
      <div className="content-center">
        <img src={CobieneLogo} alt="Cobiene logo" />
      </div>
      <div className="content-right" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  .content-left {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .content-center {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    img {
      width: 2.8rem;
      height: auto;
      object-fit: contain;
    }
  }
`;
