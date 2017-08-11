import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const Price = styled.h2`
  display: inline-block;
  margin: 0;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-family: Raleway, sans-serif;
  font-weight: 400;
  color: #111111;
`;

const Id = styled.p`
  display: inline-block;
  margin: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  font-family: Raleway, sans-serif;
  font-weight: 300;
  color: #171717;
`;

export default props =>
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
    <Id>
      Item {props.id}
    </Id>
  </Wrapper>;
