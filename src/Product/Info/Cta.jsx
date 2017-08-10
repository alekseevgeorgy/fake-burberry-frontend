import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 1rem 0;
  background-color: ${props => props.bg};
  border-radius: 2px;
  border: solid 1px #171717;
  margin-bottom: 1rem;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 400;
  color: ${props => props.color};
`;

const ButtonHelp = styled.button`
  display: block;
  margin-top: 0;
  margin-bottom: 3rem;
  padding: 0;
  border: none;
  background-color: #fff;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: #171717;
`;

export default () =>
  <div>
    <Wrapper>
      <Button bg="#171717" color="#fff">SELECT A SIZE</Button>
      <Button bg="#fff" color="#171717">FIND IN STORE</Button>
    </Wrapper>
    <ButtonHelp>NEED SIZE HELP?</ButtonHelp>
  </div>;
