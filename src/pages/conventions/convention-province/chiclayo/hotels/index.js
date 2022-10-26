import { FilterProvince } from "../../../../../utils";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";

export const HotelsChiclayo = () => {
  const hotel = FilterProvince("chiclayo", "hotel");

  return (
    <>
      <InitialContent title="Hoteles" />

      <CollapseWithButtons dataLists={hotel} />
    </>
  );
};
