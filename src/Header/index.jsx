import React from 'react';
import MediaQuery from 'react-responsive';
import Header from './Header';
import Subheader from './Subheader';

export default () =>
  (<div>
    <Header />
    <MediaQuery minDeviceWidth={768}>
      <Subheader />
    </MediaQuery>
  </div>);
