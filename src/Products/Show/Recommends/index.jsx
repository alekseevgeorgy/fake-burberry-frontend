import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.section``;

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
    margin-bottom: 2rem;
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
            to="/men/heritage-trench-coats/the-westminster-long/"
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=724&wid=532"
            productStyle="Relaxed fit"
            name="The Westminster – Long Heritage Trench Coat"
            colours={3}
            value={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            to="/men/heritage-trench-coats/the-westminster-long/"
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=724&wid=532"
            productStyle="Relaxed fit"
            name="The Westminster – Long Heritage Trench Coat"
            colours={3}
            value={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            to="/men/heritage-trench-coats/the-westminster-long/"
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=724&wid=532"
            productStyle="Relaxed fit"
            name="The Westminster – Long Heritage Trench Coat"
            colours={3}
            value={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            to="/men/heritage-trench-coats/the-westminster-long/"
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=724&wid=532"
            productStyle="Relaxed fit"
            name="The Westminster – Long Heritage Trench Coat"
            colours={3}
            value={120000}
          />
        </div>
      </div>
    </Wrapper>
  </div>);
