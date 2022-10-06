import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components/public";
import {
  AboutAs,
  Banks,
  Bazar,
  Clinics,
  CommercialShop,
  Companies,
  Conventions,
  DisabledSupport,
  EconomicalSupport,
  Education,
  EducationConventions,
  Financials,
  FormalitiesFuneralFund,
  FuneralFund,
  Gym,
  Health,
  Home,
  Hotels,
  HouseService,
  HouseServices,
  Institutes,
  Laboratories,
  LimaInstitutes,
  MilitaryCircle,
  News,
  OfficersCircle,
  Page404,
  PoliciesAndPrivacy,
  PreAcademies,
  ProvinceInstitutes,
  ReligiousService,
  ServiceSocial,
  SocialEconomicSupport,
  TechniciansCircle,
  Technology,
  Transportations,
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
        path="/conventions/companies/commercial-shop"
        element={
          <BaseLayout>
            <CommercialShop />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/companies/gym"
        element={
          <BaseLayout>
            <Gym />
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
        path="/conventions/transportations"
        element={
          <BaseLayout>
            <Transportations />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/hotels"
        element={
          <BaseLayout>
            <Hotels />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/health"
        element={
          <BaseLayout>
            <Health />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/health/laboratories"
        element={
          <BaseLayout>
            <Laboratories />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/health/clinics"
        element={
          <BaseLayout>
            <Clinics />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/financials"
        element={
          <BaseLayout>
            <Financials />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/technology"
        element={
          <BaseLayout>
            <Technology />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/education-conventions"
        element={
          <BaseLayout>
            <EducationConventions />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/education-conventions/universities"
        element={
          <BaseLayout>
            <Universities />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/education-conventions/institutes"
        element={
          <BaseLayout>
            <Institutes />
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
        path="/house-service/house-services"
        element={
          <BaseLayout>
            <HouseServices />
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
        path="/funeral-fund/formalities-funeral-fund"
        element={
          <BaseLayout>
            <FormalitiesFuneralFund />
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
        path="/social-service/economical-support/social-economic-support"
        element={
          <BaseLayout>
            <SocialEconomicSupport />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/social-service/economical-support/religious-service"
        element={
          <BaseLayout>
            <ReligiousService />
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
      <Route
        exact
        path="/news"
        element={
          <BaseLayout>
            <News />
          </BaseLayout>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
