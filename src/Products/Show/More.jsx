import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 1rem;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Heading = styled.h2`
  display: inline-block;
  margin-bottom: 1rem;
  margin-top: 0;
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 500;
  color: #171717;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 1rem;
  font-family: Lora, serif;
  font-style: italic;
  font-size: 0.875rem;
  line-height: 17px;
  font-weight: 400;
  text-decoration: none;
  color: #171717;
`;

export default () =>
  (<div className="container">
    <Wrapper>
      <Heading>MORE FOR YOU</Heading>
      <Link>Men’s Black Trench Coats</Link>
      <Link>Men’s Short Trench Coats</Link>
      <Link>Men’s Long Trench Coats</Link>
    </Wrapper>
  </div>);
