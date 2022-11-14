import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components/public";
import {
  AboutAs,
  Bazar,
  ConventionInternational,
  Conventions,
  DisabledSupport,
  EconomicalSupport,
  Education,
  EducationConventions,
  FormalitiesFuneralFund,
  FuneralFund,
  Home,
  HouseService,
  HouseServices,
  Institutes,
  LimaInstitutes,
  MilitaryCircle,
  MultiService,
  News,
  OfficersCircle,
  Page404,
  PageDefault,
  PoliciesAndPrivacy,
  Province,
  ProvinceInstitutes,
  Provinces,
  ProvinceService,
  ReligiousService,
  Samsung,
  Service,
  ServiceSocial,
  ServiceType,
  ServitecPage,
  SocialEconomicSupport,
  TechniciansCircle,
  Technology,
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
        path="/conventions/technology"
        element={
          <BaseLayout>
            <Technology />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/technology/servitec-page"
        element={
          <BaseLayout>
            <ServitecPage />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/technology/samsung"
        element={
          <BaseLayout>
            <Samsung />
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
        path="/conventions/multi-service"
        element={
          <BaseLayout>
            <MultiService />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/multi-service/:typeService"
        element={
          <BaseLayout>
            <ServiceType />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/multi-service/:typeService/:service"
        element={
          <BaseLayout>
            <Service />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/provinces"
        element={
          <BaseLayout>
            <Provinces />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/provinces/:provinceId"
        element={
          <BaseLayout>
            <Province />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/provinces/:provinceId/:provinceService"
        element={
          <BaseLayout>
            <ProvinceService />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-international"
        element={
          <BaseLayout>
            <ConventionInternational />
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
      <Route
        exact
        path="/page-default"
        element={
          <BaseLayout>
            <PageDefault />
          </BaseLayout>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
