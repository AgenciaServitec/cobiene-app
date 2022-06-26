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
  body {
    width: 100%;
    height: auto;
  }
`;
