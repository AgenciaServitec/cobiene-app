import React from "react";
import { Button, Title } from "../../../components/public";

import { useNavigate } from "react-router";

export const EducationConventions = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Title>Educación</Title>

      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/education-conventions/universities")
        }
      >
        Universidades
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/education-conventions/institutes")
        }
      >
        Institutos
      </Button>
    </div>
  );
};
