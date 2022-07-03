import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components";
import {
  AboutAs,
  DisabledSupport,
  EconomicalSupport,
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
  Bazar,
  Companies,
  Banks,
  ProvinceInstitutes,
  MilitaryCircle,
  OfficersCircle,
  TechniciansCircle,
  PoliciesAndPrivacy,
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
        path="/education/province-institutes"
        element={
          <BaseLayout>
            <ProvinceInstitutes />
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
        path="/conventions/companies"
        element={
          <BaseLayout>
            <Companies />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/banks"
        element={
          <BaseLayout>
            <Banks />
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
        path="/social-service/economical-support"
        element={
          <BaseLayout>
            <EconomicalSupport />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/social-service/disabled-support"
        element={
          <BaseLayout>
            <DisabledSupport />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/about-as"
        element={
          <BaseLayout>
            <AboutAs />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/bazar"
        element={
          <BaseLayout>
            <Bazar />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/military-circle"
        element={
          <BaseLayout>
            <MilitaryCircle />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/military-circle/officers-circle"
        element={
          <BaseLayout>
            <OfficersCircle />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/military-circle/technicians-circle"
        element={
          <BaseLayout>
            <TechniciansCircle />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/policies-and-privacy"
        element={
          <BaseLayout>
            <PoliciesAndPrivacy />
          </BaseLayout>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
