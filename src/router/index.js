import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components";
import {
  ApoyoDiscapacitado,
  ApoyoEconomico,
  Conventions,
  Education,
  FuneralFund,
  Home,
  HouseService,
  Institutes,
  LimaInstitutes,
  Page404,
  PreAcademies,
  ServiceSocial,
  Universities,
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
        path="/education/lima-institutes"
        element={
          <BaseLayout>
            <LimaInstitutes />
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
        path="/conventions/universities"
        element={
          <BaseLayout>
            <Universities />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/institutes"
        element={
          <BaseLayout>
            <Institutes />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/pre-academies"
        element={
          <BaseLayout>
            <PreAcademies />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/house-service"
        element={
          <BaseLayout>
            <HouseService />
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
      <Route
        exact
        path="/social-service"
        element={
          <BaseLayout>
            <ServiceSocial />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/social-service/apoyo-economico"
        element={
          <BaseLayout>
            <ApoyoEconomico />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/social-service/apoyo-discapacitado"
        element={
          <BaseLayout>
            <ApoyoDiscapacitado />
          </BaseLayout>
        }
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
