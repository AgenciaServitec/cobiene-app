import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../components/public";
import { FilterProvince } from "../../../../utils";

export const Ayacucho = () => {
  const hotel = FilterProvince("ayacucho", "hotel");

  return (
    <>
      <InitialContent title="Ayacucho" />

      <CollapseWithButtons dataLists={hotel} />
    </>
  );
};
