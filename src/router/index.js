import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components/public";
import {
  AboutAs,
  Arequipa,
  Banks,
  Bazar,
  Clinics,
  CommercialShop,
  Companies,
  ConventionInternational,
  ConventionMultiServices,
  ConventionProvince,
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
  HealthTacna,
  Home,
  Hotels,
  HotelsPiura,
  HotelsTacna,
  HouseService,
  HouseServices,
  Institutes,
  Laboratories,
  LifeInsurance,
  LimaInstitutes,
  LimaRestaurants,
  MilitaryCircle,
  News,
  OfficersCircle,
  Page404,
  PageDefault,
  PiuraSullana,
  PoliciesAndPrivacy,
  PreAcademies,
  ProvinceInstitutes,
  Puno,
  ReligiousService,
  RestaurantsArequipa,
  RestaurantsPiura,
  RestaurantsTacna,
  Samsung,
  ServiceSocial,
  ServitecPage,
  SocialEconomicSupport,
  Tacna,
  TechniciansCircle,
  Technology,
  Transportations,
  Universities,
  HealthArequipa,
  Ayacucho,
  Chiclayo,
  HealthChiclayo,
  HotelsChiclayo,
  CompaniesChiclayo,
  Huancayo,
  Trujillo,
  TrujilloHotels,
  TrujilloRestaurants,
  Tumbes,
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
        path="/conventions/health/life-insurance"
        element={
          <BaseLayout>
            <LifeInsurance />
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
        path="/conventions/convention-multiservices"
        element={
          <BaseLayout>
            <ConventionMultiServices />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-multiservices/lima-restaurants"
        element={
          <BaseLayout>
            <LimaRestaurants />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province"
        element={
          <BaseLayout>
            <ConventionProvince />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/piura-sullana"
        element={
          <BaseLayout>
            <PiuraSullana />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/piura-sullana/hotels"
        element={
          <BaseLayout>
            <HotelsPiura />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/piura-sullana/restaurants"
        element={
          <BaseLayout>
            <RestaurantsPiura />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/tacna"
        element={
          <BaseLayout>
            <Tacna />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/tacna/hotels"
        element={
          <BaseLayout>
            <HotelsTacna />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/tacna/restaurants"
        element={
          <BaseLayout>
            <RestaurantsTacna />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/tacna/health"
        element={
          <BaseLayout>
            <HealthTacna />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/puno"
        element={
          <BaseLayout>
            <Puno />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/arequipa"
        element={
          <BaseLayout>
            <Arequipa />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/arequipa/health"
        element={
          <BaseLayout>
            <HealthArequipa />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/arequipa/restaurants"
        element={
          <BaseLayout>
            <RestaurantsArequipa />
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
        path="/conventions/convention-province/ayacucho"
        element={
          <BaseLayout>
            <Ayacucho />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/chiclayo"
        element={
          <BaseLayout>
            <Chiclayo />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/chiclayo/health"
        element={
          <BaseLayout>
            <HealthChiclayo />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/chiclayo/hotels"
        element={
          <BaseLayout>
            <HotelsChiclayo />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/chiclayo/companies"
        element={
          <BaseLayout>
            <CompaniesChiclayo />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/huancayo"
        element={
          <BaseLayout>
            <Huancayo />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/trujillo"
        element={
          <BaseLayout>
            <Trujillo />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/trujillo/hotels"
        element={
          <BaseLayout>
            <TrujilloHotels />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/trujillo/restaurants"
        element={
          <BaseLayout>
            <TrujilloRestaurants />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions/convention-province/tumbes"
        element={
          <BaseLayout>
            <Tumbes />
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
