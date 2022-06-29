import React from "react";
import { Button } from "../../../components";
import { useNavigate } from "react-router";

export const AcademiasPre = () => {
  const navigate = useNavigate();
  return (
    <conteiner>
      <div className="content-logo">
        <h2>Academias Pre</h2>
      </div>
    </conteiner>
  );
};
