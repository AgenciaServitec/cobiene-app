import React from "react";
import DrawerAntd from "antd/lib/drawer";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import {
  faBars,
  faChurch,
  faEnvelope,
  faGraduationCap,
  faHome,
  faHomeUser,
  faNewspaper,
  faPhone,
  faShoppingCart,
  faThLarge,
  faTree,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { NavigateGoToLink } from "../ui";
import { CobieneLogo, EjercitoDelPeruLogo } from "../../../images";
import { useFormContact } from "../../../providers";
import { DrawerShow } from "../home";

export const Drawer = ({ visibleDrawer, onSetVisibleDrawer }) => {
  const { visibleFormContact, setVisibleFormContact } = useFormContact();

  const handleVisibleFormContact = () =>
    setVisibleFormContact(!visibleFormContact);

  return (
    <>
      <ComponentDrawerAntd
        title={null}
        placement="right"
        onClose={() => onSetVisibleDrawer(false)}
        visible={visibleDrawer}
      >
        <div className="wrapper-header">
          <img src={CobieneLogo} alt="Logo cobiene" />
        </div>
        <div className="wrapper-content">
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
            text="Apoyo Social"
            onClick={() => onSetVisibleDrawer(false)}
            icon={faUsers}
            linkTo="/social-service"
          />
          <MenuItem
            text="Fondo de sepelio"
            onClick={() => onSetVisibleDrawer(false)}
            icon={faChurch}
            linkTo="/funeral-fund"
          />

          <DrawerShow
            title="Recreación"
            icon={faTree}
            content={
              <>
                <MenuItem
                  text="Círculos"
                  onClick={() => onSetVisibleDrawer(false)}
                  icon={faCircle}
                  linkTo="/military-circle"
                />
                <MenuItem
                  text="Círculo Militar de Oficiales"
                  onClick={() => onSetVisibleDrawer(false)}
                  icon={faCircle}
                  linkTo="/military-circle/officers-circle"
                />
                <MenuItem
                  text="Círculo Militar de Supervisores Técnicos y Sub Oficiales"
                  onClick={() => onSetVisibleDrawer(false)}
                  icon={faCircle}
                  linkTo="/military-circle/technicians-circle"
                />
              </>
            }
          />

          <MenuItem
            text="Bazar del Ejercito"
            onClick={() => onSetVisibleDrawer(false)}
            icon={faShoppingCart}
            linkTo="/bazar"
          />
          <DrawerShow
            title="Vivienda"
            icon={faHome}
            content={
              <>
                <MenuItem
                  text="Casa de servico"
                  onClick={() => onSetVisibleDrawer(false)}
                  icon={faHome}
                  linkTo="/house-service"
                />
                <MenuItem
                  text="Fovime"
                  onClick={() =>
                    NavigateGoToLink(
                      "https://fovime.com/expo-fovime-2022/inmobiliarias/"
                    )
                  }
                  icon={faHomeUser}
                  linkTo="/"
                />
              </>
            }
          />

          <MenuItem
            text="Noticias"
            onClick={() => onSetVisibleDrawer(false)}
            icon={faNewspaper}
            linkTo="/news"
          />
          <MenuItem
            text="Contactanos"
            onClick={() => {
              handleVisibleFormContact();
              return onSetVisibleDrawer(false);
            }}
            icon={faEnvelope}
            linkTo="/"
          />
          <MenuItem
            text="Anexo 3924"
            onClick={() => {
              NavigateGoToLink("tel:013171700");
            }}
            icon={faPhone}
            linkTo="/"
          />
        </div>
        <div className="wrapper-footer">
          <img src={EjercitoDelPeruLogo} alt="Footer logo" />
          <h4>A tu servicio</h4>
        </div>
      </ComponentDrawerAntd>
    </>
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
    background: #fff;
  }

  .wrapper-header {
    display: flex;
    justify-content: center;
    margin: 1rem 1rem 2rem 1rem;
    img {
      width: 7rem;
    }
  }
  .show-list {
    color: #000;
  }

  .wrapper-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 2rem 1rem 1rem 1rem;
    color: ${({ theme }) => theme.colors.dark};
    img {
      width: 5rem;
    }
    h4 {
      color: inherit;
    }
  }
`;
