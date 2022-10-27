import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import { FilterProvince } from "../../../../../utils";

export const TumbesTransports = () => {
  const transports = FilterProvince("tumbes", "transport");

  return (
    <>
      <InitialContent title="Transportes" />

      <CollapseWithButtons dataLists={transports} />
    </>
  );
};
