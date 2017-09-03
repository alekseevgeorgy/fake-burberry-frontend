import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Size = styled.button`
  margin-right: .5rem;
  padding: .5rem 1rem;
  border-radius: 2px;
  border: solid 1px #171717;
  font-family: Raleway, sans-serif;
  font-size: 12px;
  line-height: 16px;
  background-color: inherit;
  color: #171717;

  ${props =>
    props.selected &&
    `
    font-weight: 700;
  `};
`;

class SizeButtons extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e.target.value);
  }

  render() {
    return (
      <Wrapper>
        {this.props.sizes.map(size =>
          (<Size onClick={this.handleClick} value={size}>
            {size}
          </Size>),
        )}
      </Wrapper>
    );
  }
}

SizeButtons.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SizeButtons;
