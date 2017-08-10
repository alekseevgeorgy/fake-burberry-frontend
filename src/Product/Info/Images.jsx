import React from "react";
import styled from "styled-components";

const Image = styled.img`
  height: 400px;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    height: 576px;
  }
`;

const Images = styled.div`
  display: flex;
  flex-flow: row;
  overflow-x: scroll;
  flex-shrink: 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media screen and (min-width: 768px) {
    width: inherit;
    position: inherit;
    left: inherit;
    right: inherit;
    margin-left: inherit;
    margin-right: inherit;
  }
`;

export default () => {
  return (
    <Images>
      <Image
        src={process.env.PUBLIC_URL + "img/product-photo-1.png"}
        alt="product-photo-1"
      />
      <Image
        src={process.env.PUBLIC_URL + "img/product-photo-2.png"}
        alt="product-photo-2"
      />
      <Image
        src={process.env.PUBLIC_URL + "img/product-photo-3.png"}
        alt="product-photo-3"
      />
      <Image
        src={process.env.PUBLIC_URL + "img/product-photo-4.png"}
        alt="product-photo-4"
      />
    </Images>
  );
};
