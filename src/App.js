import React from "react";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import { IntlProvider, addLocaleData } from "react-intl";
import ruLocaleData from "react-intl/locale-data/ru";

addLocaleData(ruLocaleData);

export default () =>
  <IntlProvider locale="ru">
    <div>
      <Header />
      <Product />
      <Footer />
    </div>
  </IntlProvider>;
