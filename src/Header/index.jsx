import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import Header from './Header';
import Subheader from './Subheader';

class HeaderParent extends Component {
  constructor(props) {
    super(props);
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick1() {
    this.props.handleClick2();
  }

  render() {
    return (
      <div>
        <Header passProps={this.handleClick1} />
        <MediaQuery minWidth={768}>
          <Subheader />
        </MediaQuery>
      </div>
    );
  }
}

HeaderParent.propTypes = {
  handleClick2: PropTypes.func.isRequired,
};

export default HeaderParent;
