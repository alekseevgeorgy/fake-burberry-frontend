import React, { Component } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingButton from './ShoppingButton';
import hamburger from '../img/hamburger.svg';
import logo from '../img/logo.svg';

const HeaderSt = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;

  @media screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media screen and (min-width: 62rem) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const Hamburger = styled.button`
  position: absolute;
  padding: 0;
  left: .5rem;
  background-image: url(${hamburger});
  background-size: contain;
  background-repeat: no-repeat;
  width: 1rem;
  height: 0.625rem;
  border: none;
  background-color: inherit;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Logo = styled.img`
  margin: auto;
  display: block;
  height: 12px;

  @media screen and (min-width: 48rem) {
    height: 16px;
  }
`;

const countries = ['United Kingdom (£)', 'United States ($)', 'Russian Federation (₽)'];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  handleOutsideClick(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.handleClick(false);
    }
  }

  handleClick(on) {
    if (on !== this.state.isOpened) {
      this.setState(prevState => ({
        isOpened: !prevState.isOpened,
      }));
      this.props.passProps();
    }
  }

  render() {
    return (
      <HeaderSt className="container">
        <div
          ref={(node) => {
            this.node = node;
          }}
        >
          <Hamburger onClick={this.handleClick} />
        </div>
        <MediaQuery minWidth={768}>
          <ShoppingButton countries={countries} />
        </MediaQuery>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </HeaderSt>
    );
  }
}

Header.propTypes = {
  passProps: PropTypes.func.isRequired,
};

export default Header;
