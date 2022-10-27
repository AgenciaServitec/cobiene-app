import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import { FilterProvince } from "../../../../../utils";

export const TumbesHotels = () => {
  const hotels = FilterProvince("tumbes", "hotel");

  return (
    <>
      <InitialContent title="Hoteles" />
      <CollapseWithButtons dataLists={hotels} />
    </>
  );
};
