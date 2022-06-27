import React from "react";
import DrawerAntd from "antd/lib/drawer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";

export const Drawer = ({ visibleDrawer, onSetVisibleDrawer }) => {
  return (
    <ComponentDrawerAntd
      title={null}
      placement="left"
      onClose={() => onSetVisibleDrawer(false)}
      visible={visibleDrawer}
    >
      <Link to="/">
        <MenuItem text="Home" onClick={() => onSetVisibleDrawer(false)} />
      </Link>
      <Link to="/">
        <MenuItem text="Home" onClick={() => onSetVisibleDrawer(false)} />
      </Link>
      <Link to="/">
        <MenuItem text="Home" onClick={() => onSetVisibleDrawer(false)} />
      </Link>
    </ComponentDrawerAntd>
  );
};

const ComponentDrawerAntd = styled(DrawerAntd)`
  color: ${({ theme }) => theme.colors.font1};

  .ant-drawer-header {
    .ant-drawer-close {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
  .ant-drawer-header,
  .ant-drawer-content {
    background: ${({ theme }) => theme.colors.white};
  }
`;
