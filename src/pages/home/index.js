import React from "react";
import styled from "styled-components";
import { Button, IframeFb } from "../../components/public";
import { useNavigate } from "react-router";
import { useDevice } from "../../hooks";
import { ImgFacebookMobileView } from "../../images";

export const Home = () => {
  const navigate = useNavigate();
  const { isMobile } = useDevice();

  return (
    <Container>
      <Button width="100%" onClick={() => navigate("/education")}>
        APOYO EDUCATIVO
      </Button>
      <Button width="100%" onClick={() => navigate("/military-circle")}>
        RECREACIÓN
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions")}>
        CONVENIOS
      </Button>
      <Button width="100%" onClick={() => navigate("/funeral-fund")}>
        FONDO DE SEPELIO
      </Button>
      <Button width="100%" onClick={() => navigate("/house-service")}>
        VIVIENDA
      </Button>
      {isMobile ? (
        <img
          src={ImgFacebookMobileView}
          alt="Cobiene ep"
          className="image-facebook-view"
          onClick={() =>
            (window.location.href =
              "https://www.facebook.com/profile.php?id=61555409192993")
          }
        />
      ) : (
        <IframeFb />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 6rem;

  a {
    width: 330px;
    max-width: 500px;
    display: block;
    margin: 2rem auto 0;
  }

  .image-facebook-view {
    width: 330px;
    max-width: 500px;
    display: block;
    margin: 2rem auto 0;
  }
`;
