import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";
import Responsive from "react-responsive";

var MediaQuery = require("react-responsive");

const Card = styled.a`
  display: block;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Name = styled.h3`
  margin-bottom: .5rem;
  margin-top: .5rem;
  font-family: Lora, serif;
  font-size: 1rem;
  line-height: 1.19;
  font-weight: 400;
  color: #171717;

  @media screen and (min-width: 992px) {
    margin-top: 1rem;
    font-family: Raleway;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.67;
  }
`;

const Price = styled.h5`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1.17;
  font-weight: 400;
  color: #999999;

  @media screen and (min-width: 992px) {
    position: relative;
    top: 4rem;
    margin-bottom: -1rem;
    font-size: 12px;
    line-height: 1rem;
    color: #171717;
  }
`;

export default props =>
  <Card>
    <Image src={props.image} />
    <MediaQuery minDeviceWidth={922}>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency={props.currency}
          currencyDisplay="code"
          minimumFractionDigits="0"
        />
      </Price>
    </MediaQuery>
    <Name>
      {props.name}
    </Name>
    <MediaQuery maxDeviceWidth={921}>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency={props.currency}
          currencyDisplay="code"
          minimumFractionDigits="0"
        />
      </Price>
    </MediaQuery>
  </Card>;
