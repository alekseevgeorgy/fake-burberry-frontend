import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Heading = styled.h4`
  margin-top: .5rem;
  margin-bottom: 1rem;
  color: #171717;
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1875rem;
  text-align: center;
`;

const Link = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: Lora, serif;
  font-weight: 400;
  font-style: italic;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: #171717;
`;

export default () =>
  <Wrapper>
    <Heading>Need help?</Heading>
    <Link>Find out more and contact us</Link>
  </Wrapper>;
