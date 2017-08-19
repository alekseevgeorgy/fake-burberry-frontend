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

  @media screen and (min-width: 48rem) {
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`display: flex;`;

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

  &:after {
    content: "";
    margin-left: .5rem;
    background: url(${arrow}) 0 0 no-repeat;
    background-size: contain;
    width: 0.75rem;
    height: 0.375rem;
  }
`;

const ButtonRight = Button.extend`margin-right: 0;`;

export default () =>
  (<Filter>
    <Wrapper>
      <Button>Category</Button>
      <Button>Colour</Button>
      <Button>Size</Button>
    </Wrapper>
    <ButtonRight>Sort by price</ButtonRight>
  </Filter>);
