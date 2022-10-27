import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";
import { FilterProvince } from "../../../../../utils";

export const TumbesRestaurants = () => {
  const restaurants = FilterProvince("tumbes", "restaurant");
  return (
    <>
      <InitialContent title="Restaurantes" />

      <CollapseWithButtons dataLists={restaurants} />
    </>
  );
};
