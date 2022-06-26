import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { GlobalStyles } from "./styles/themes/GlobalStyle";
import { yup } from "./config";
import { setLocale } from "yup";
import { common } from "./firebase";
import { useEffect } from "react";

export const App = () => {
  setLocale(yup["es"]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};
