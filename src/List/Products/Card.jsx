/* eslint react/style-prop-object: "off" */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedNumber } from 'react-intl';
import PropTypes from 'prop-types';
import like from '../../img/like.svg';

const Wrapper = styled(Link)`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Style = styled.p`
  margin-top: 1rem;
  margin-bottom: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;

  &:after {
    content: "";
    background: url(${like}) 0 0 no-repeat;
    background-size: contain;
    width: 0.875rem;
    height: 0.875rem;
  }
`;

const Name = styled.h3`
  margin-top: 0;
  margin-bottom: .5rem;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  @media screen and (min-width: 62rem) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

const Colour = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

const ColourLink = styled.a`
  padding-bottom: 1px;
  border-bottom: 1px solid #171717;
  text-decoration: none;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
`;

const Price = styled.p`
  margin: 0;
  padding-bottom: 1rem;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

export default function Card(props) {
  return (
    <Wrapper to="/product">
      <Image src={props.src} />
      <Style>
        {props.productStyle}
      </Style>
      <Name>
        {props.name}
      </Name>
      <Colour>
        Available in <ColourLink href="">{props.colours} colours</ColourLink>
      </Colour>
      <Price>
        <FormattedNumber
          value={props.value}
          style="currency"
          currency="RUB"
          currencyDisplay="code"
          minimumFractionDigits="0"
        />
      </Price>
    </Wrapper>
  );
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  productStyle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colours: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
