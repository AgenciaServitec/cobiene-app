import { FilterProvince } from "../../../../../utils";
import {
  CollapseWithButtons,
  InitialContent,
} from "../../../../../components/public";

export const CompaniesChiclayo = () => {
  const company = FilterProvince("chiclayo", "company");

  return (
    <>
      <InitialContent title="Empresas" />

      <CollapseWithButtons dataLists={company} />
    </>
  );
};
