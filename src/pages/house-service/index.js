import React from "react";
import { Button, NavigateGoToLink } from "../../components";
import styled, { css } from "styled-components";
import { CasaServicio, CobieneLogo } from "../../images";
import { useNavigate } from "react-router";

export const HouseService = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content-logo">
        <img src={CobieneLogo} alt="Coviene Logo" />
        <h2>Vivienda</h2>
      </div>
      <Button
        width="100%"
        onClick={() => navigate("/house-service/house-services")}
      >
        Casa de Servicio
      </Button>
      <Button
        width="100%"
        onClick={() =>
          NavigateGoToLink("https://fovime.com/expo-fovime-2022/inmobiliarias/")
        }
      >
        Fovime
      </Button>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;

    .content-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1rem auto;

      img {
        width: 8em;
        height: auto;
        object-fit: contain;
        margin-bottom: 1rem;
      }

      h2 {
        text-shadow: ${theme.text_shadow.shadow_green};
      }
    }
  `}
`;
