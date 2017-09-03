/* eslint-disable max-len */

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const FilterSt = styled.div`
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

  handleClick() {
    // 6 функция, которая вызывается пропом из 5 шага
    this.setState(prevState => ({
      isActive: !prevState.isActive, // 7 обновляется стейт РОДИТЕЛЯ, чтобы менять цвет в нашем случае
    }));
    this.props.updateParentState(); // 8 объявляем проп, чтобы передать его дальше вверх
  }

  render() {
    return (
      <FilterSt>
        <Wrapper>
          <Button
            handleChange={this.handleClick} // 5 задаем (инициализируем) значение для пропа
            isActive={this.state.isActive}
            name="Category"
          >
            <DropdownText>Content</DropdownText>
          </Button>
          <Button handleChange={this.handleClick} isActive={this.state.isActive} name="Colour">
            <DropdownText>
              Content for colour <button>you can click me and i wont close dropdown, yey!</button>
            </DropdownText>
          </Button>
          <Button handleChange={this.handleClick} isActive={this.state.isActive} name="Size">
            <DropdownText>Content for size</DropdownText>
          </Button>
        </Wrapper>
        <Wrapper>
          <Button
            handleChange={this.handleClick}
            active={this.state.isActive}
            name="Sort by price"
            align="right"
          >
            <DropdownText>Content for sort by price</DropdownText>
          </Button>
        </Wrapper>
      </FilterSt>
    );
  }
}

Filter.propTypes = {
  updateParentState: PropTypes.func.isRequired,
};

export default Filter;
