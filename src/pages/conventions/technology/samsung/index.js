import { InitialContent } from "../../../../components/public";
import { CobieneLogo } from "../../../../images";

export const Samsung = () => {
  return (
    <div>
      <InitialContent
        img={CobieneLogo}
        title="Estamos trabajando por el bienestar"
      />
      <InitialContent title="Proximamente..." />
    </div>
  );
};
