import React, { useState } from "react";
import styled from "styled-components";
import { Drawer } from "./Drawer";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const BaseLayout = ({ children }) => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  return (
    <Container>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
      />
      <Header onSetVisibleDrawer={setVisibleDrawer} />
      <div className="body">{children}</div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;
  background: radial-gradient(#11581e, #041607),
    url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  .body {
    width: 100%;
    height: auto;
    padding: 1rem;
  }
`;
