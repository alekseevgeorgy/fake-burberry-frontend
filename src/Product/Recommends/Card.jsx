import React from "react";
import styled from "styled-components";

const Card = styled.a`
  display: block;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Name = styled.h3`
  margin-bottom: .5rem;
  margin-top: .5rem;
  font-family: Lora, serif;
  font-size: 1rem;
  line-height: 1.19;
  font-weight: 400;
  color: #171717;
`;

const Price = styled.h5`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1.17;
  font-weight: 400;
  color: #999999;
`;

export default props =>
  <Card>
    <Image src={props.image} />
    <Name>
      {props.name}
    </Name>
    <Price>
      {props.price}
    </Price>
  </Card>;
