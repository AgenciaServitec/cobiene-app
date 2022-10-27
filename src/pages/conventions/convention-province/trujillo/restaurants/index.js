import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import { FilterProvince } from "../../../../../utils";

export const TrujilloRestaurants = () => {
  const restaurants = FilterProvince("trujillo", "restaurant");

  return (
    <>
      <InitialContent title="Restaurantes" />

      <CollapseWithButtons dataLists={restaurants} />
    </>
  );
};
