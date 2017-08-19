import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Button from './Button';
import Description from './Description';

const ImagePrimary = styled.img`
  display: block;
  width: 100%;
  flex-shrink: 0;
  margin-top: 4rem;
`;

const ImageSecondary = styled.img`
  display: block;
  width: 100%;
  flex-shrink: 0;
`;

const Images = styled.div`
  margin-bottom: 4rem;

  div:nth-child(1) {
    margin-top: 6rem;
  }

  div:nth-child(2) {
    margin-top: 10rem;
  }

  div:nth-child(3) {
    margin-top: 4rem;
  }
`;

export default () =>
  (<div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-4">
        <Button />
        <Description />
      </div>
      <MediaQuery minWidth={992}>
        <div className="col-lg-8">
          <ImagePrimary
            src={`${process.env.PUBLIC_URL}/img/product-photo-5.png`}
            alt="product-photo-5"
          />
        </div>
      </MediaQuery>
    </div>
    <MediaQuery minWidth={992}>
      <Images className="row">
        <div className="col-lg-4">
          <ImageSecondary
            src={`${process.env.PUBLIC_URL}/img/product-photo-2.png`}
            alt="product-photo-2"
          />
        </div>
        <div className="col-lg-4">
          <ImageSecondary
            src={`${process.env.PUBLIC_URL}/img/product-photo-4.png`}
            alt="product-photo-4"
          />
        </div>
        <div className="col-lg-4">
          <ImageSecondary
            src={`${process.env.PUBLIC_URL}/img/product-photo-3.png`}
            alt="product-photo-3"
          />
        </div>
      </Images>
    </MediaQuery>
  </div>);
