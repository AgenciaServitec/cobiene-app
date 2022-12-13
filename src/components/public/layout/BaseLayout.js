import React, { useState } from "react";
import styled from "styled-components";
import { Drawer } from "./Drawer";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HeaderHomePage } from "./HeaderHomePage";
import { breakPoints } from "../../../styles/constants/breakPoints";

export const BaseLayout = ({ children }) => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [visibleFormContact, setVisibleFormContact] = useState(false);

  const handleVisibleFormContact = () =>
    setVisibleFormContact(!visibleFormContact);

  return (
    <Container>
      <div className="overlay"></div>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
        visibleFormContact={visibleFormContact}
        handleVisibleFormContact={handleVisibleFormContact}
      />
      {window.location.pathname === "/" ? (
        <HeaderHomePage onSetVisibleDrawer={setVisibleDrawer} />
      ) : (
        <Header onSetVisibleDrawer={setVisibleDrawer} />
      )}

      <div className="body">{children}</div>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  max-width: ${breakPoints.tablet}px;
  margin: auto;
  min-height: 100vh;
  height: auto;
  position: relative;
  background: radial-gradient(#11581e, #041607),
    url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  z-index: 1;
  .overlay {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    background-size: auto 4px;
    z-index: -1;

    &:before {
      content: "";
      pointer-events: none;
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        0deg,
        transparent 0%,
        rgba(32, 128, 32, 0.2) 2%,
        rgba(32, 128, 32, 0.8) 3%,
        rgba(32, 128, 32, 0.2) 3%,
        transparent 100%
      );
      background-repeat: no-repeat;
      animation: scan 7.5s linear 0s infinite;
    }
    @keyframes scan {
      0% {
        background-position: 0 -100vh;
      }

      35%,
      100% {
        background-position: 0 100vh;
      }
    }
  }
  .body {
    width: 100%;
    height: auto;
    padding: 1rem;
  }
`;
