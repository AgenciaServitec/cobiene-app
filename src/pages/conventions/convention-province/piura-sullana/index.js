import React from "react";
import { useNavigate } from "react-router";
import { Button, InitialContent } from "../../../../components/public";

export const PiuraSullana = () => {
  const navigate = useNavigate();

  return (
    <>
      <InitialContent title="Piura - Sullana" />

      <Button
        width="100%"
        onClick={() =>
          navigate(
            "/conventions/convention-province/piura-sullana/restaurant-piura"
          )
        }
      >
        RESTAURANTES
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate(
            "/conventions/convention-province/piura-sullana/hotels-piura"
          )
        }
      >
        HOTELES
      </Button>
    </>
  );
};
