import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Show from './Products/Show';
import List from './Products/List';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/:section" component={List} />
          <Route path="/:section/:subsection/:id" component={Show} />
          <Redirect from="/" to="/men/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  </IntlProvider>);
