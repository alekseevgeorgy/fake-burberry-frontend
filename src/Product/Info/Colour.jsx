import React from "react";
import styled from "styled-components";

const Colour = styled.p`
  padding-left: 1rem;
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: #171717;

  @media screen and (min-width: 768px) {
    padding-left: .5rem;
  }

  @media screen and (min-width: 992px) {
    padding-left: 0;
  }
`;

export default () =>
  <div>
    <Colour>
      Colour: <b>Honey</b>
    </Colour>
  </div>;
