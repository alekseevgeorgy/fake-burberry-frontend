import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled(NavLink)`
  padding: 1rem 1rem;
  border: none;
  text-decoration: none;
  font-family: Raleway, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 1.5px;
  color: #999999;
  background-color: inherit;

  &.active {
    color: #171717;
    box-shadow: inset 0 -1px 0 0 #171717;
  }
`;

export default () =>
  (<Wrapper>
    <Button to="/women">WOMEN</Button>
    <Button to="/men/" selected>
      MEN
    </Button>
    <Button to="/children">CHILDREN</Button>
    <Button to="/beauty">BEAUTY</Button>
    <Button to="/experience">EXPERIENCE</Button>
  </Wrapper>);
