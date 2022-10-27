import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../components/public";
import { FilterProvince } from "../../../../utils";

export const Huancayo = () => {
  const convention = FilterProvince("huancayo", "health");
  return (
    <>
      <InitialContent title="Huancayo" />

      <CollapseWithButtons dataLists={convention} />
    </>
  );
};
