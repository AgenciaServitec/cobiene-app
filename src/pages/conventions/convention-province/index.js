import React from "react";
import { useNavigate } from "react-router";
import { Button, InitialContent } from "../../../components/public";
import { CobieneLogo } from "../../../images";

export const ConventionProvince = () => {
  const navigate = useNavigate();
  return (
    <>
      <InitialContent
        img={CobieneLogo}
        title="Convenios de Provincia"
        description="Son aquellos convenios firmados por el Sistema de Bienestar de la Gran Unidad a nivel Nacional en coordinación con el comando de bienestar del ejército en provecho de todo el personal  militar y civil que labora en nuestra institución  en situación de actividad y retiro.
"
      />

      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/piura-sullana")
        }
      >
        PIURA - SULLANA
      </Button>
      <Button
        width="100%"
        onClick={() => navigate("/conventions/convention-province/tacna")}
      >
        TACNA
      </Button>
      <Button
        width="100%"
        onClick={() => navigate("/conventions/convention-province/puno")}
      >
        PUNO
      </Button>
    </>
  );
};
