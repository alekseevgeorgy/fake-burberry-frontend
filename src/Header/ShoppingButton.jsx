import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from '../img/arrow.svg';

const WrapperSelect = styled.div`
  left: .5rem;
  display: flex;
  align-items: center;
  position: absolute;
  overflow: hidden;

  &:after {
    content: "";
    margin-left: .5rem;
    background: url(${arrow}) 0 0 no-repeat;
    background-size: contain;
    width: 0.75rem;
    height: 0.375rem;
  }
`;

const CurrentStore = styled.button`
  padding: 0;
  border: none;
  font-family: Raleway;
  font-size: 12px;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;
  color: #999999;
  background-color: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
`;

const CurrentStoreHidden = styled.select`
  cursor: pointer;
  font-size: 12px;
  opacity: 0;
  position: absolute;
`;

class ShoppingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: this.props.countries[0],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      country: e.target.value,
    });
  }

  render() {
    return (
      <WrapperSelect>
        <CurrentStoreHidden onChange={this.handleChange} name="countries">
          {this.props.countries.map(country =>
            (<option value={country}>
              Shopping in: {country}
            </option>),
          )}
        </CurrentStoreHidden>
        <CurrentStore>
          Shopping in: {this.state.country}
        </CurrentStore>
      </WrapperSelect>
    );
  }
}

ShoppingButton.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ShoppingButton;
