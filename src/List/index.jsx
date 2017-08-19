import React from 'react';
import { Helmet } from 'react-helmet';
import Filter from './Filter';
import Products from './Products';
import ShowMore from './ShowMore';

export default () =>
  (<main>
    <Helmet>
      <title>Men - Burberry</title>
    </Helmet>
    <Filter />
    <Products />
    <ShowMore />
  </main>);
