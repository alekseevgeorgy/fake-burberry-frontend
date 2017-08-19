import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Product from './Product';
import List from './List';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={List} />
        <Route path="/men/clothing/coats/Long-Cotton-Gabardine-Car-Coat" component={Product} />
        <Footer />
      </div>
    </Router>
  </IntlProvider>);
