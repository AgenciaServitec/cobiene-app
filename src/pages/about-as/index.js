import React from "react";
import { Barracks, Servitec } from "../../images";
import { Button } from "../../components";

export const AboutAs = () => {
  return (
    <cotainer>
      <div className="content-log">
        <img src={Barracks} alt="base" />
        <h2>NOSOTROS</h2>
      </div>
      <Button width="100%">PRESENTACIÓN</Button>
      <Button width="100%">MISIÓN Y VISIÓN</Button>
      <Button width="100%">INFORMACION Y SOPORTE</Button>
      <img src={Servitec} alt="servitec" />
    </cotainer>
  );
};
