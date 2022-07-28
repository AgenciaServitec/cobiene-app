import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { GlobalStyles } from "./styles/themes/GlobalStyle";
import { yup } from "./config";
import { setLocale } from "yup";
import { FormContactPopUp } from "./providers";
import { FormContact } from "./components";

export const App = () => {
  useEffect(() => {
    setLocale(yup["es"]);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <FormContactPopUp>
          <Router />
          <FormContact />
        </FormContactPopUp>
      </ThemeProvider>
    </BrowserRouter>
  );
};
