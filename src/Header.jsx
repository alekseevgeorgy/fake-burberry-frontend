import React from 'react';
import styled from 'styled-components';
import logo from './img/logo.svg';

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media screen and (min-width: 62rem) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: none;
  }
`;

const Logo = styled.img`
  display: block;

  @media screen and (min-width: 62rem) {
    height: 16px;
  }
`;

export default () =>
  (<Header>
    <a href="">
      <Logo src={logo} />
    </a>
  </Header>);
