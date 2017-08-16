import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import './App.css';
import Header from './Header';
import Product from './Product';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
    <div>
      <Header />
      <Product />
      <Footer />
    </div>
  </IntlProvider>);
