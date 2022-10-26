import { FilterProvince } from "../../../../../utils";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";

export const HealthChiclayo = () => {
  const health = FilterProvince("chiclayo", "health");

  return (
    <>
      <InitialContent title="Salud" />

      <CollapseWithButtons dataLists={health} />
    </>
  );
};
