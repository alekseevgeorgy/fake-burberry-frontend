/* eslint react/style-prop-object: "off" */

import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media screen and (min-width: 48rem) {
    margin-top: 0;
  }

  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
  }
`;

const Price = styled.h2`
  display: inline-block;
  padding-left: .5rem;
  margin: 0;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-family: Raleway, sans-serif;
  font-weight: 400;
  color: #111111;

  @media screen and (min-width: 48rem) {
    padding-left: 0;
  }

  @media screen and (min-width: 62rem) {
    font-weight: 500;
    margin-bottom: 3rem;
  }
`;

const Id = styled.p`
  display: inline-block;
  margin: 0;
  padding-right: .5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-family: Raleway, sans-serif;
  font-weight: 300;
  color: #171717;

  @media screen and (min-width: 48rem) {
    padding-right: 0;
  }
`;

export default function PriceExport(props) {
  return (
    <Wrapper>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency={props.currency}
          currencyDisplay="code"
          minimumFractionDigits="0"
        />
      </Price>
      <MediaQuery maxDeviceWidth={992}>
        <Id>
          Item {props.id}
        </Id>
      </MediaQuery>
    </Wrapper>
  );
}

PriceExport.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
