import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  display: block;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  border: none;
  padding: 0;
  font-family: Raleway, serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 16px;
  background-color: #f3f3f3;
  color: #999999;
`;

const BlackColour = Button.extend`
  display: inline-block;
  margin-right: 0;
  margin-bottom: 0;
  color: #171717;
`;

export default () =>
  (<Wrapper>
    <Button>
      Shipping country: <BlackColour>Russian Federation</BlackColour>
    </Button>
    <Button>
      Language: <BlackColour>English</BlackColour>
    </Button>
  </Wrapper>);
