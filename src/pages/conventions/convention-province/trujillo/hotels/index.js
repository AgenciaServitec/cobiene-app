import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import { FilterProvince } from "../../../../../utils";

export const TrujilloHotels = () => {
  const hotels = FilterProvince("trujillo", "hotel");

  return (
    <>
      <InitialContent title="Hoteles" />

      <CollapseWithButtons dataLists={hotels} />
    </>
  );
};
