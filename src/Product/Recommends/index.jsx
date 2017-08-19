import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.section`
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const Heading = styled.h2`
  display: inline-block;
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 500;
  color: #171717;

  @media screen and (min-width: 62rem) {
    margin-top: 4rem;
    display: block;
    border-bottom: none;
    text-align: center;
  }
`;

export default () =>
  (<div className="container">
    <Wrapper>
      <Heading>WE RECOMMEND</Heading>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=628&wid=464"
            name="Emroided Hooded Content For Three Lines"
            price={27000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=628&wid=464"
            name="Relaxed Fit Stretch Jeans Content For Three Lines"
            price={25500}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=628&wid=464"
            name="Leather and House Check Content For Three Lines"
            price={120000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=628&wid=464"
            name="Leather Wingtip Check Content For Three Lines"
            price={46000}
            currency="RUB"
          />
        </div>
      </div>
    </Wrapper>
  </div>);
