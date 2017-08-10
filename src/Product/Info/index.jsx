import React from "react";
import Name from "./Name";
import Images from "./Images";
import Price from "./Price";
import Colour from "./Colour";
import Cta from "./Cta";

export default () =>
  <div>
    <Name />
    <div className="row">
      <div className="col-xs-12 col-md-7">
        <Images />
      </div>
      <div className="col-xs-12 col-md-5">
        <Price />
        <Colour />
        <Cta />
      </div>
    </div>
  </div>;
