import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 1rem 1rem;
  border: none;
  font-family: Raleway, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 1.5px;
  color: #999999;
  background-color: inherit;

  ${props =>
    props.selected &&
    `
    color: #171717;
    box-shadow: inset 0 -1px 0 0 #171717;
  `};
`;

export default () =>
  (<Wrapper>
    <Button>WOMEN</Button>
    <Button selected>MEN</Button>
    <Button>CHILDREN</Button>
    <Button>BEAUTY</Button>
    <Button>EXPERIENCE</Button>
  </Wrapper>);
