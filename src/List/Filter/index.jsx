import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Filter from './Filter';

const Background = styled.div`
  margin-bottom: 2rem;
  background-color: #f3f3f3;

  @media screen and (min-width: 48rem) {
    margin-bottom: 4rem;
  }
`;

const Wrapper = styled.div`
  padding: 2rem 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding-top: 4rem;
    padding-bottom: 1rem;
  }
`;

const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Lora, serif;
  font-weight: 400;
  font-size: 1.625rem;
  line-height: 2rem;
  color: #171717;
`;

const Text = styled.p`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #171717;
  opacity: 0.87;
`;

const TextLink = styled.a`
  padding-bottom: 1px;
  border-bottom: 1px solid #171717;
  text-decoration: none;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
`;

const MoreButton = styled.button`
  padding: 0;
  margin-top: -1px;
  margin-left: .5rem;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 1px solid #171717;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 500;
  color: #171717;
  background-color: inherit;
`;

export default () =>
  (<Background>
    <div className="container">
      <Wrapper>
        <Heading>Men’s Clothing</Heading>
        <div className="row">
          <div className="col-xs-12 col-md-9 col-lg-7">
            <Text>
              Explore our menswear collection for the season. Sculptural knitwear,{' '}
              <TextLink>sweatshirts</TextLink>, artist overalls and oversized cabans feature
              alongside our signature trench coat in both heritage and seasonal…
              <MoreButton>More</MoreButton>
            </Text>
          </div>
        </div>
      </Wrapper>
      <MediaQuery minWidth={768}>
        <Filter />
      </MediaQuery>
    </div>
    <MediaQuery maxWidth={767}>
      <Filter />
    </MediaQuery>
  </Background>);
