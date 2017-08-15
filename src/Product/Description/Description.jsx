import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  padding: 0 1rem 2rem 1rem;

  @media screen and (min-width: 48rem) {
    padding: 0 0 1.5rem;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: Lora, serif;
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: #171717;
  }

  br {
    line-height: 1.5rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    font-family: Lora, serif;
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: #171717;
  }
`;

export default () =>
  (<Content>
    <p>A refined car coat crafted in protective cotton gabardine.</p>
    <p>
      Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven
      and breathable fabric that protects against wind and rain.
    </p>
    <p>
      Raglan sleeves and a concealed button closure complement the clean
      tailored lines.
    </p>
    <p>The piece is finished with a distinctive check undercollar.</p>
    <br />
    <p>
      Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions
      change slightly according to size.
    </p>
    <ul>
      <li>Outer: 100% cotton</li>
      <li>Check lining: 100% cotton</li>
      <li>Sleeve lining: 100% viscose</li>
      <li>Buttons: buffalo horn</li>
      <li>Specialist dry clean</li>
      <li>Made in Europe</li>
      <li>Item 39428531</li>
    </ul>
  </Content>);
