import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components";
import { Home, Education, Page404, ServiceHouse, FuneralFund } from "../pages";

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
