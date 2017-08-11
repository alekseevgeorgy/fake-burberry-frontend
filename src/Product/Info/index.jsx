import React from "react";
import styled from "styled-components";
import Images from "./Images";
import Price from "./Price";
import Colour from "./Colour";
import Cta from "./Cta";

const Name = styled.h1`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: .5rem;
  margin: 0;
  font-family: Lora, serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #111111;

  @media screen and (min-width: 768px) {
    padding: 1.5rem 0 1.5rem 0;
    font-size: 1.5rem;
    line-height: 28px;
  }
`;

export default () =>
  <div>
    <Name>Long Cotton Gabardine Car Coat</Name>
    <div className="row">
      <div className="col-xs-12 col-md-7">
        <Images />
      </div>
      <div className="col-xs-12 col-md-5">
        <Price price={110000} currency="RUB" id={39428531} />
        <Colour />
        <Cta />
      </div>
    </div>
  </div>;
