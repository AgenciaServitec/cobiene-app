import React from "react";
import DrawerAntd from "antd/lib/drawer";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import {
  faBars,
  faChurch,
  faFolderOpen,
  faGraduationCap,
  faHome,
  faHomeUser,
  faShoppingCart,
  faThLarge,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { NavigateGoToLink } from "../../ui";

export const Drawer = ({ visibleDrawer, onSetVisibleDrawer }) => {
  return (
    <ComponentDrawerAntd
      title={null}
      placement="right"
      onClose={() => onSetVisibleDrawer(false)}
      visible={visibleDrawer}
    >
      <MenuItem
        text="Inicio"
        onClick={() => onSetVisibleDrawer(false)}
        icon={faBars}
        linkTo="/"
      />
      <MenuItem
        text="Nosotros"
        onClick={() => onSetVisibleDrawer(false)}
        icon={faThLarge}
        linkTo="/about-as"
      />
      <MenuItem
        text="Educación"
        onClick={() => onSetVisibleDrawer(false)}
        icon={faGraduationCap}
        linkTo="/education"
      />
      <MenuItem
        text="Servicio Social"
        onClick={() => onSetVisibleDrawer(false)}
        icon={faUsers}
        linkTo="/social-service"
      />
      <MenuItem
        text="Servicio de sepelio"
        onClick={() => onSetVisibleDrawer(false)}
        icon={faChurch}
        linkTo="/funeral-fund"
      />
      <MenuItem
        text="Bazar del Ejercito"
        onClick={() => onSetVisibleDrawer(false)}
        icon={faShoppingCart}
        linkTo="/bazar"
      />
      <MenuItem
        text="Casa de servico"
        onClick={() => onSetVisibleDrawer(false)}
        icon={faHome}
        linkTo="/house-service"
      />
      <MenuItem
        text="Fovime"
        onClick={() =>
          NavigateGoToLink("https://fovime.com/expo-fovime-2022/inmobiliarias/")
        }
        icon={faHomeUser}
        linkTo="/"
      />
      <MenuItem
        text="Circulo Militar"
        onClick={() => onSetVisibleDrawer(false)}
        icon={faCircle}
        linkTo="/military-circle"
      />
      <MenuItem
        text="Solicitudes"
        onClick={() => onSetVisibleDrawer(false)}
        icon={faFolderOpen}
        linkTo="/"
      />
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
