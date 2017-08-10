import React from "react";
import styled from "styled-components";
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
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default props => {
  return (
    <main className="container">
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
