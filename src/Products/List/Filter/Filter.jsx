import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton';

const FilterSt = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow-x: scroll;

  @media screen and (min-width: 48rem) {
    justify-content: space-between;
    overflow-x: visible;
  }
`;

const Wrapper = styled.div`display: flex;`;

const DropdownText = styled.p`
  font-family: Raleway, sans-serif;
  white-space: nowrap;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data) {
    const active = data === true;
    this.props.stateUpdate(this.state.isActive);
    this.setState({
      isActive: !active,
    });
  }

  render() {
    return (
      <FilterSt>
        <Wrapper>
          <FilterButton
            childClick={this.handleClick}
            active={this.state.isActive}
            name="Category"
            align="left"
          >
            <DropdownText>Content</DropdownText>
          </FilterButton>
          <FilterButton childClick={this.handleClick} active={this.state.isActive} name="Colour">
            <DropdownText>
              Content for colour <button>you can click me and i wont close dropdown, yey!</button>
            </DropdownText>
          </FilterButton>
          <FilterButton childClick={this.handleClick} active={this.state.isActive} name="Size">
            <DropdownText>Content for size</DropdownText>
          </FilterButton>
        </Wrapper>
        <Wrapper>
          <div>
            <FilterButton
              childClick={this.handleClick}
              active={this.state.isActive}
              name="Sort by price"
              align="right"
            >
              <DropdownText>Content for sort by price</DropdownText>
            </FilterButton>
          </div>
        </Wrapper>
      </FilterSt>
    );
  }
}

Filter.propTypes = {
  stateUpdate: PropTypes.func.isRequired,
};

export default Filter;
