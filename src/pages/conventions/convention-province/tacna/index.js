import { useNavigate } from "react-router";
import { Button, InitialContent } from "../../../../components/public";

export const Tacna = () => {
  const navigate = useNavigate();

  return (
    <>
      <InitialContent title="Tacna" />
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/tacna/hotels")
        }
      >
        HOTELES
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/tacna/restaurants")
        }
      >
        RESTAURANTES
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/tacna/health")
        }
      >
        SALUD
      </Button>
    </>
  );
};
