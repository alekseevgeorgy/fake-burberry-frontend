import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #c6c6c6;
  padding-top: 1rem;
  padding-bottom: 2rem;
  margin: 0 .5rem;

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  @media screen and (min-width: 992px) {
    border-bottom: none;
    padding-bottom: 1.5rem;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 20px;
  border-radius: 50%;
  border: none;
  margin-right: 1rem;
  background-color: ${props => props.colour};
  box-shadow: ${props =>
    props.selected ? "inset 0 0 0 1px #232122;" : "none"};
`;

export default () =>
  <Wrapper>
    <Button colour="#232122" />
    <Button colour="#cfa880" selected />
  </Wrapper>;
