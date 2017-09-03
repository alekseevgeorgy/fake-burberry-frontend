import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from '../img/logo.svg';
import arrow from '../img/arrow.svg';

const Wrapper = styled.div`
  display: ${props => (props.isClicked ? 'block' : 'none')};
  padding: 0 .5rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 274px;
  overflow-y: scroll;
`;

const Logo = styled.img`
  padding: 18px 0;
  margin: 0 auto 26px;
  display: block;
  height: 12px;
`;

const Link = styled.a`
  margin-bottom: 26px;
  display: flex;
  font-family: Raleway;
  font-size: 14px;
  line-height: 1.0;
  color: #171717;

  &:after {
    content: "";
    width: 0.75rem;
    height: 0.375rem;
    background-size: contain;
    margin-left: auto;
    transform: rotate(-90deg);
    background-image: ${props => (props.category ? `url(${arrow})` : 'none')};
  }
`;

const Heading = styled.h2`
  margin-top: 48px;
  margin-bottom: 18px;
  font-family: Raleway;
  font-size: 12px;
  font-weight: bold;
  color: #171717;
`;

const SelectWrapper = styled.div`padding-top: 28px;`;

const Select = styled.select`
  display: block;
  width: 100%;
  margin-top: 0;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  background-color: inherit;
  padding: 16px;
  border-radius: 2px;
  text-align-last: center;
  font-family: Raleway;
  font-size: 12px;
  line-height: 1rem;
  text-align: center;
  color: #171717;
`;

export default function Sidebar(props) {
  return (
    <Wrapper isClicked={props.onClick}>
      <Logo src={logo} />
      <Link category>Men</Link>
      <Link category>Women</Link>
      <Link category>Children</Link>
      <Link category>Beauty</Link>
      <Heading>CUSTOMER SERVICE</Heading>
      <Link>Contact Us</Link>
      <Link>Payment</Link>
      <Link>Shipping</Link>
      <Link>Returns</Link>
      <Link>Faqs</Link>
      <Link>The Burberry App</Link>
      <Link>Store Locator</Link>
      <Heading>OUR COMPANY</Heading>
      <Link>Our History</Link>
      <Link>Burberry Group Plc</Link>
      <Link>Careers</Link>
      <Link>Corporate Responsibility</Link>
      <Link>Site Map</Link>
      <SelectWrapper>
        <Select>
          <option>United Kingdom (£)</option>
          <option>United Kingdom (£)</option>
          <option>United Kingdom (£)</option>
        </Select>
        <Select>
          <option>English</option>
          <option>Russian</option>
        </Select>
      </SelectWrapper>
    </Wrapper>
  );
}

Sidebar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
