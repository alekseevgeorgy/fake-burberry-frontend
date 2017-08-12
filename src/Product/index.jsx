import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Info from "./Info";
import Description from "./Description";
import Shipping from "./Shipping";
import Recommends from "./Recommends";
import More from "./More";

const Line = styled.hr`
  margin: 0;
  height: 1px;
  border: none;
  background-color: #c6c6c6;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default () => {
  return (
    <main>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
      </Helmet>
      <Info />
      <Line />
      <Description />
      <Line />
      <Shipping />
      <Line />
      <Recommends />
      <More />
    </main>
  );
};
