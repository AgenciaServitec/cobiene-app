import React, { useEffect } from "react";
import { Router } from "./router";
import { yup } from "./config";
import { setLocale } from "yup";
import { FormContact } from "./components/public";
import {
  AuthenticationProvider,
  VersionProvider,
  FormContactProvider,
} from "./providers";

export const App = () => {
  useEffect(() => {
    setLocale(yup["es"]);
  }, []);

  return (
    <VersionProvider>
      <AuthenticationProvider>
        <FormContactProvider>
          <Router />
          <FormContact />
        </FormContactProvider>
      </AuthenticationProvider>
    </VersionProvider>
  );
};
