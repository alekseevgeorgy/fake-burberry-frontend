import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 2rem;
  }
`;

const Heading = styled.h3`
  margin-bottom: 1rem;
  margin-top: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 700;
  color: #171717;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 0.75rem;
  margin-top: 0;
  text-decoration: none;
  font-family: Raleway, sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #999999;
`;

export default () =>
  <Navigation>
    <div className="row">
      <div className="col-md-3">
        <Heading>CUSTOMER SERVICE</Heading>
        <Link href="#">Contact Us</Link>
        <Link href="#">Payment</Link>
        <Link href="#">Shipping</Link>
        <Link href="#">Returns</Link>
        <Link href="#">Faqs</Link>
        <Link href="#">Returns</Link>
        <Link href="#">The Burberry App</Link>
        <Link href="#">Store Locator</Link>
      </div>
      <div className="col-md-3">
        <Heading>OUR COMPANY</Heading>
        <Link href="#">Our History</Link>
        <Link href="#">Burberry Group Plc</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Corporate Responsibility</Link>
        <Link href="#">Site Map</Link>
      </div>
      <div className="col-md-3">
        <Heading>LEGAL &amp; COOKIES</Heading>
        <Link href="#">Terms &amp; Conditions</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Cookie Policy</Link>
        <Link href="#">Accessibility Statement</Link>
        <Link href="#">Japan Only - SCTL indications</Link>
      </div>
    </div>
  </Navigation>;
