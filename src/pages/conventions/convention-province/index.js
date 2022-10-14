import React from "react";
import { useNavigate } from "react-router";
import { Button, InitialContent } from "../../../components/public";
import { CobieneLogo } from "../../../images";

export const ConventionProvince = () => {
  const navigate = useNavigate();
  return (
    <div>
      <InitialContent img={CobieneLogo} title="Convenios de Provincia" />

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
    </div>
  );
};
