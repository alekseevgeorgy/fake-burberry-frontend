import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Size = styled.button`
  margin-right: .5rem;
  padding: .5rem 1rem;
  border-radius: 2px;
  border: solid 1px #171717;
  font-family: Raleway, sans-serif;
  font-size: 12px;
  line-height: 16px;
  background-color: inherit;
  color: #171717;

  ${props =>
    props.selected &&
    `
    font-weight: 700;
  `};
`;

export default () =>
  <Wrapper>
    <Size>S</Size>
    <Size>M</Size>
    <Size>L</Size>
    <Size selected>XL</Size>
  </Wrapper>;
