import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media screen and (min-width: 48rem) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  display: block;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  border: none;
  padding: 0;
  text-align: left;
  font-family: Raleway, serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 16px;
  background-color: #f3f3f3;
  color: #999999;

  @media screen and (min-width: 48rem) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 62rem) {
    margin-right: 3rem;
  }
`;

const BlackColour = styled.span`color: #171717;`;

export default () =>
  (<Wrapper>
    <Button>
      Shipping country: <BlackColour>Russian Federation</BlackColour>
    </Button>
    <Button>
      Language: <BlackColour>English</BlackColour>
    </Button>
  </Wrapper>);
