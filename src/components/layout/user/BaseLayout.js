import React, { useState } from "react";
import styled from "styled-components";
import { Drawer } from "./Drawer";

export const BaseLayout = ({ children }) => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  return (
    <Container>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
      />
      <div className="header">
        <span>header</span>
      </div>
      <div className="body">{children}</div>
      <div className="footer">
        <span>Footer</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;

  .header,
  .footer {
    width: 100%;
    height: auto;
    padding: 1rem;
    background: black;
    color: #fff;
  }
`;
