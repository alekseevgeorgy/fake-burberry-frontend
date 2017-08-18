import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import hamburger from '../img/hamburger.svg';
import arrow from '../img/arrow.svg';
import logo from '../img/logo.svg';

const Header = styled.header`
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

const CurrentStore = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 0;
  border: none;
  left: .5rem;
  font-family: Raleway;
  font-size: 12px;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;
  color: #999999;
  background-color: inherit;

  &:after {
    content: "";
    margin-left: .5rem;
    background: url(${arrow}) 0 0 no-repeat;
    background-size: contain;
    width: 0.75rem;
    height: 0.375rem;
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

export default () =>
  (<Header className="container">
    <Hamburger />
    <MediaQuery minDeviceWidth={768}>
      <CurrentStore>Shopping in: United Kingdom (£)</CurrentStore>
    </MediaQuery>
    <Link to="/">
      <Logo src={logo} />
    </Link>
  </Header>);
