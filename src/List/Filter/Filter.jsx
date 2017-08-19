import React from 'react';
import styled from 'styled-components';
import arrow from '../../img/arrow.svg';

const Filter = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow-x: scroll;
`;

const Refinement = styled.p`
  margin: 0;
  padding-right: 2rem;
  white-space: nowrap;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 1rem;
  white-space: nowrap;
  border: none;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: inherit;
  color: #171717;

  ${props =>
    props.alignRight &&
    `
    margin-left: auto;
    margin-right: 0;
  `};

  &:after {
    content: "";
    margin-left: .5rem;
    background: url(${arrow}) 0 0 no-repeat;
    background-size: contain;
    width: 0.75rem;
    height: 0.375rem;
  }

  @media screen and (min-width: 48rem) {
    margin-right: 3rem;

    ${props =>
    props.alignRight &&
      `
      margin-right: 0;
    `};
  }
`;

export default () =>
  (<Filter>
    <Refinement>Refine by</Refinement>
    <Button>Category</Button>
    <Button>Colour</Button>
    <Button>Size</Button>
    <Button alignRight>Sort by price</Button>
  </Filter>);
