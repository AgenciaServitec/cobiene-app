import { Button, InitialContent } from "../../../../components/public";
import { useNavigate } from "react-router";

export const Arequipa = () => {
  const navigate = useNavigate();
  return (
    <>
      <InitialContent title="Arequipa" />

      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/arequipa/restaurants")
        }
      >
        Pasteleria
      </Button>
      <Button
        width="100%"
        onClick={() =>
          navigate("/conventions/convention-province/arequipa/health")
        }
      >
        Salud
      </Button>
    </>
  );
};
