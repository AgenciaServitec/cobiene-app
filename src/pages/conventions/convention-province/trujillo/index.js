import { Button, InitialContent } from "../../../../components/public";
import { useNavigate } from "react-router";

export const Trujillo = () => {
  const navigate = useNavigate();
  return (
    <>
      <InitialContent title="Trujillo" />

      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/trujillo/hotels")
        }
      >
        Hoteles
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/trujillo/restaurants")
        }
      >
        Restaurantes
      </Button>
    </>
  );
};
