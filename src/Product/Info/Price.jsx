import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
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

const Article = styled.p`
  display: inline-block;
  margin: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  font-family: Raleway, sans-serif;
  font-weight: 300;
  color: #171717;
`;

export default () =>
  <Wrapper>
    <Price>110 000 руб.</Price>
    <Article>Item 39428531</Article>
  </Wrapper>;
