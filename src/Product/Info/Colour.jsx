import React from "react";
import styled from "styled-components";

const Colour = styled.p`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: #171717;
`;

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #c6c6c6;
  padding-top: 1rem;
  padding-bottom: 2rem;
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
  <div>
    <Colour>Colour: Honey</Colour>
    <Wrapper>
      <Button colour="#232122" />
      <Button colour="#cfa880" selected />
    </Wrapper>
  </div>;
