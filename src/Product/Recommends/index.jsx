import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.section`
  padding: 0 .5rem;

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 992px) {
    margin-top: 4rem;
    display: block;
    border-bottom: none;
    text-align: center;
  }
`;

export default () =>
  <div className="container">
    <Wrapper>
      <Heading>WE RECOMMEND</Heading>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            image={
              "https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"
            }
            name="Emroided Hooded Content For Three Lines"
            price={27000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image={
              "https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"
            }
            name="Relaxed Fit Stretch Jeans Content For Three Lines"
            price={25500}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image={
              "https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"
            }
            name="Leather and House Check Content For Three Lines"
            price={120000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image={
              "https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"
            }
            name="Leather Wingtip Check Content For Three Lines"
            price={46000}
            currency="RUB"
          />
        </div>
      </div>
    </Wrapper>
  </div>;
