import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Size = styled.p`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: #171717;
`;

const ButtonHelp = styled.button`
  padding: 0;
  border: none;
  background-color: inherit;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: #171717;
`;

export default () =>
  <Wrapper>
    <Size>
      Size: <b>XL</b>
    </Size>
    <ButtonHelp>NEED SIZE HELP?</ButtonHelp>
  </Wrapper>;
