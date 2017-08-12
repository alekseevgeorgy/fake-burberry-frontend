import React from "react";
import styled from "styled-components";
import triangle from "../../img/triangle-up.svg";

const Button = styled.button`
  padding: 0;
  margin: 0;
  width: 100%;
  border: none;
  background: inherit;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;

  &:after {
    content: url(${triangle});
  }

  @media screen and (min-width: 768px) {
    border-top: 0;
    padding: 1.5rem 0 1rem 0;

    &:after {
      content: none;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 4rem 0 1rem 0;

`;

const Heading = styled.h2`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #171717;
`;

export default () =>
  <Button>
    <WrapperButton>
      <Heading>DESCRIPTION</Heading>
    </WrapperButton>
  </Button>;
