import { Button, InitialContent, Text } from "../../../../components/public";
import { useNavigate } from "react-router";

export const Chiclayo = () => {
  const navigate = useNavigate();

  return (
    <>
      <InitialContent title="Chiclayo" />

      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/chiclayo/companies")
        }
      >
        Empresas
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/chiclayo/hotels")
        }
      >
        Hoteles
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/chiclayo/health")
        }
      >
        Salud
      </Button>
    </>
  );
};
