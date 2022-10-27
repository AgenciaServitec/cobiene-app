import { useNavigate } from "react-router";
import { Button, InitialContent } from "../../../../components/public";

export const Tumbes = () => {
  const navigate = useNavigate();
  return (
    <>
      <InitialContent title="Trujillo" />

      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/tumbes/hotels")
        }
      >
        Hoteles
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/tumbes/restaurants")
        }
      >
        Restaurantes
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/tumbes/transports")
        }
      >
        Transportes
      </Button>
    </>
  );
};
