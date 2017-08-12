import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import Images from "./Images";
import Price from "./Price";
import Colour from "./Colour";
import Cta from "./Cta";
import Size from "./Size";
import SizeButtons from "./SizeButtons";
import ColourButtons from "./ColourButtons";

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

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0 1.5rem 0;
    font-size: 1.5rem;
    line-height: 28px;
  }

  @media screen and (min-width: 62rem) {
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: 28px;
  }
`;

const Background = styled.div`
  @media screen and (min-width: 62rem) {
    background-color: #d4bdad;
  }
`;

const Title = styled.p`
  margin-top: .5rem;
  margin-bottom: 0.25rem;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 700;
`;

const Text = Title.extend`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
`;

const Test = styled.div`width: 100%;`;

export default () =>
  <Background>
    <div className="container">
      <MediaQuery maxDeviceWidth={991}>
        <Name>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Name>
      </MediaQuery>
      <div className="row middle-lg">
        <div className="col-xs-12 col-md-7 col-lg-6">
          <Images />
        </div>
        <div className="col-xs-12 col-md-5">
          <Test>
            <MediaQuery minDeviceWidth={992}>
              <Name>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Name>
            </MediaQuery>
            <Price price={110000} currency="RUB" id={39428531} />
            <div className="row">
              <div className="col-lg-6">
                <Colour />
              </div>
              <MediaQuery minDeviceWidth={992}>
                <div className="col-lg-6">
                  <Size />
                </div>
              </MediaQuery>
            </div>
            <div className="row">
              <div className="col-xs-12 col-lg-6">
                <ColourButtons />
              </div>
              <MediaQuery minDeviceWidth={992}>
                <div className="col-lg-6">
                  <SizeButtons />
                </div>
              </MediaQuery>
            </div>
            <Cta />
            <MediaQuery minDeviceWidth={992}>
              <Title>Free Next Day Delivery</Title>
              <Text>
                Order before 7pm Monday to Thursday for delivery the next day
              </Text>
            </MediaQuery>
          </Test>
        </div>
      </div>
    </div>
  </Background>;
