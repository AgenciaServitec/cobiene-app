import React from "react";
import DrawerAntd from "antd/lib/drawer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuList } from "../../ui/MenuList";

export const Drawer = ({ visibleDrawer, onSetVisibleDrawer }) => {
  return (
    <ComponentDrawerAntd
      title={null}
      placement="left"
      onClose={() => onSetVisibleDrawer(false)}
      visible={visibleDrawer}
    >
      <MenuItem onClick={() => onSetVisibleDrawer(false)}>
        <Link to="/">
          <MenuList />
        </Link>
      </MenuItem>
    </ComponentDrawerAntd>
  );
};

const ComponentDrawerAntd = styled(DrawerAntd)`
  color: #000;

  .ant-drawer-header {
    .ant-drawer-close {
      color: #000;
    }
  }
  .ant-drawer-header,
  .ant-drawer-content {
    width: 80%;
    background: #f2f2f2;
  }
`;

const MenuItem = styled.div`
  a {
    color: #000;
    font-size: 1.5rem;
  }
`;
