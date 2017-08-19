import React from 'react';
import styled from 'styled-components';

const Current = styled.h4`
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: Lora, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const Button = styled.button`
  display: flex;
  margin: 0 auto 5rem;
  padding: 1rem 2rem;
  border-radius: 2px;
  border: none;
  box-shadow: inset 0 0 0 1px #171717;
  background-color: inherit;
  font-family: Raleway, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

export default () =>
  (<div>
    <Current>Showing 8 of 17</Current>
    <Button>View 9 more</Button>
  </div>);
