import { InitialContent } from "../../components/public";
import { CobieneLogo } from "../../images";

export const PageDefault = () => {
  return (
    <>
      <InitialContent
        img={CobieneLogo}
        title="Estamos trabajando por el bienestar"
      />
      <InitialContent title="Proximamente..." />
    </>
  );
};
