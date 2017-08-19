import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Product from './Product';
import ProductsList from './ProductsList';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/:section" component={ProductsList} />
          <Route path="/:section/:subsection/:id" component={Product} />
          <Redirect from="/" to="/men/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  </IntlProvider>);
