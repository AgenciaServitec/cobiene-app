import { useNavigate } from "react-router";
import { Button, InitialContent, SortWords } from "../../../components/public";
import { CobieneLogo } from "../../../images";

export const ConventionProvince = () => {
  const navigate = useNavigate();

  const listButtons = [
    {
      title: " PIURA - SULLANA",
      url: "/conventions/convention-province/piura-sullana",
    },
    {
      url: "/conventions/convention-province/tacna",
      title: "TACNA",
    },
    {
      url: "/conventions/convention-province/puno",
      title: "PUNO",
    },
    {
      title: "TRUJILLO",
      url: "/conventions/convention-province/trujillo",
    },
    {
      title: "TUMBES",
    },
    {
      title: "AYACUCHO",
      url: "/conventions/convention-province/ayacucho",
    },
    {
      title: "CHICLAYO",
      url: "/conventions/convention-province/chiclayo",
    },
    {
      title: "HUANCAYO",
      url: "/conventions/convention-province/huancayo",
    },
    {
      title: "AREQUIPA",
      url: "/conventions/convention-province/arequipa",
    },
  ];

  SortWords(listButtons);

  return (
    <>
      <InitialContent
        img={CobieneLogo}
        title="Convenios de Provincia"
        description="Son aquellos convenios firmados por el Sistema de Bienestar de la Gran Unidad a nivel Nacional en coordinación con el comando de bienestar del ejército en provecho de todo el personal  militar y civil que labora en nuestra institución  en situación de actividad y retiro.
"
      />

      {listButtons.map((listButton, index) => (
        <Button
          key={index}
          width="100%"
          onClick={() =>
            navigate(listButton.url ? listButton.url : "/page-default")
          }
        >
          {listButton.title}
        </Button>
      ))}
    </>
  );
};
