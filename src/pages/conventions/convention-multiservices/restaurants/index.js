import React from "react";
import { InitialContent } from "../../../../components/public";
import { CobieneLogo } from "../../../../images";

export const LimaRestaurants = () => {
  return (
    <>
      <InitialContent
        title="Estamos trabajando por el bienestar."
        img={CobieneLogo}
      />
      <InitialContent title="Proximamente" />
    </>
  );
};
