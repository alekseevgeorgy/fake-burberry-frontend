import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './Header';
import Show from './Products/Show';
import List from './Products/List';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  ${props =>
    props.isClicked &&
    `
    transform: translate3d(290px, 0, 0);
    height: 100vh;
    overflow: hidden;
  `};
`;

addLocaleData(ruLocaleData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick3() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <IntlProvider locale="ru">
        <Router>
          <div>
            <Sidebar onClick={this.state.isActive} />
            <Wrapper isClicked={this.state.isActive}>
              <Header handleClick2={this.handleClick3} />
              <Switch>
                <Route exact path="/:section" component={List} />
                <Route path="/:section/:subsection/:id" component={Show} />
                <Redirect from="/" to="/men/" />
              </Switch>
              <Footer />
            </Wrapper>
          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
