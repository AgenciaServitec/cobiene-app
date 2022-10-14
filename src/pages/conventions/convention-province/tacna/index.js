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
          navigate("/conventions/convention-province/tacna/restaurant-tacna")
        }
      >
        RESTAURANTES
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/tacna/hotels-tacna")
        }
      >
        HOTELES
      </Button>
    </>
  );
};
