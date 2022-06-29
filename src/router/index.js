import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components";
import {
  Home,
  Education,
  Conventions,
  Page404,
  Universidades,
  Institutos,
  AcademiasPre,
    ServiceHouse, FuneralFund
} from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BaseLayout>
            <Home />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/education"
        element={
          <BaseLayout>
            <Education />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions"
        element={
          <BaseLayout>
            <Conventions />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conentions/universidades"
        element={
          <BaseLayout>
            <Universidades />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conentions/institutos"
        element={
          <BaseLayout>
            <Institutos />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conentions/academiaspre"
        element={
          <BaseLayout>
            <AcademiasPre />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/service-house"
        element={
          <BaseLayout>
            <ServiceHouse />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/funeral-fund"
        element={
          <BaseLayout>
            <FuneralFund />
          </BaseLayout>
        }
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
