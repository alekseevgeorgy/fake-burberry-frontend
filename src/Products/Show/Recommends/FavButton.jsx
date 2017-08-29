/* eslint-disable max-len */

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  padding: 0;
  margin-top: 1rem;
  margin-left: .5rem;
  flex-shrink: 0;
  border: none;
  background-color: inherit;
  outline: none;

  @media screen and (min-width: 48rem) {
    margin-left: 1rem;
  }
`;

class FavButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.handleClick}
          style={{ fill: this.state.isToggleOn ? 'none' : 'black' }}
        >
          <svg width="16px" height="15px">
            <g
              id="Symbols"
              stroke="black"
              strokeWidth="1"
              fill={this.props.fill}
              fillRule="evenodd"
            >
              <g id="Icon-/-Like" transform="translate(1.000000, 1.000000)">
                <path
                  d="M7.00147577,14 L1.1995764,7.7486402 C-0.43417144,5.94319333 -0.39228047,3.05447833 1.28335834,1.29416763 C2.85426972,-0.353302646 5.34678245,-0.44357499 7.00147577,1.11362294 C8.67711458,-0.44357499 11.1905728,-0.353302646 12.7614842,1.3393038 L12.7614842,1.3393038 C14.395232,3.0996145 14.4161775,5.96576141 12.8033751,7.7486402 L12.8033751,7.7486402 L7.00147577,14 Z"
                  id="path-1"
                />
              </g>
            </g>
          </svg>
        </Button>
      </div>
    );
  }
}

FavButton.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default FavButton;
