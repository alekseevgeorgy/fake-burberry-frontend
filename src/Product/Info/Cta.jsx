import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const Button = styled.button`
  padding: 1rem 0;
  width: 100%;
  border-radius: 2px;
  border: solid 1px #171717;
  margin-bottom: 1rem;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 400;

  ${props =>
    props.primary &&
    `
    background-color: #171717;
    color: #fff;
  `};

  ${props =>
    props.secondary &&
    `
    background-color: inherit;
    color: #171717;
  `};
`;

const ButtonHelp = styled.button`
  display: block;
  margin-top: .5rem;
  margin-bottom: 3rem;
  padding: 0 .5rem;
  border: none;
  background-color: #fff;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: #171717;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

export default () =>
  <div>
    <MediaQuery maxDeviceWidth={991}>
      <Wrapper>
        <Button primary>SELECT A SIZE</Button>
        <Button secondary>FIND IN STORE</Button>
      </Wrapper>
    </MediaQuery>
    <MediaQuery minDeviceWidth={992}>
      <div className="row">
        <div className="col-lg-6">
          <Button primary>ADD TO BAG</Button>
        </div>
        <div className="col-lg-6">
          <Button secondary>FIND IN STORE</Button>
        </div>
      </div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={991}>
      <ButtonHelp>NEED SIZE HELP?</ButtonHelp>
    </MediaQuery>
  </div>;
