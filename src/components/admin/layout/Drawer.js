import React from "react";
import { Drawer as DrawerAntd, Menu } from "antd";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHome,
  faSignOut,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { version } from "../../../firebase";
import { useAuthentication } from "../../../providers";

export const Drawer = ({ isVisibleDrawer, setIsVisibleDrawer, navigateTo }) => {
  const { logout } = useAuthentication();

  return (
    <DrawerContainer
      title={
        <div>
          <Title level={3} style={{ margin: 0 }}>
            Cobiene web
          </Title>
          <span>version: {version}</span>
        </div>
      }
      placement="left"
      closable={true}
      onClose={() => setIsVisibleDrawer(!isVisibleDrawer)}
      visible={isVisibleDrawer}
      key="left"
      className="drawer-content"
      bodyStyle={{ padding: "0" }}
    >
      <div className="logo" />
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item
          key="1"
          icon={<FontAwesomeIcon icon={faHome} />}
          onClick={() => {
            navigateTo("/admin");
            setIsVisibleDrawer(false);
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<FontAwesomeIcon icon={faBookOpen} />}
          onClick={() => {
            navigateTo("/admin/flip-book-pages");
            setIsVisibleDrawer(false);
          }}
        >
          Flip book pages
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<FontAwesomeIcon icon={faUsers} />}
          onClick={() => {
            navigateTo("/admin/users");
            setIsVisibleDrawer(false);
          }}
        >
          Usuarios
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<FontAwesomeIcon icon={faSignOut} />}
          onClick={async () => {
            await logout();
            setIsVisibleDrawer(false);
          }}
        >
          Cerrar sesión
        </Menu.Item>
      </Menu>
    </DrawerContainer>
  );
};

const DrawerContainer = styled(DrawerAntd)`
  .drawer-content {
  }
`;
