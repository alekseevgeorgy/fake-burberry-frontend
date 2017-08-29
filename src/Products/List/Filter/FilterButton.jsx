import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import arrow from '../../../img/arrow.svg';

const Wrapper = styled.div`position: relative;`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 1rem;
  white-space: nowrap;
  border: none;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  cursor: pointer;
  background-color: inherit;
  color: #171717;
  opacity: ${props => (props.currentState && props.active ? '.5' : '1')};
  opacity: ${props => (!props.currentState && props.active ? '.5' : '1')};

  &:after {
    content: "";
    margin-left: .5rem;
    background-image: url(${arrow});
    background-size: contain;
    width: 0.75rem;
    height: 0.375rem;
    transform: ${props => (props.currentState ? 'rotate(180deg)' : 'none')};
  }

  @media screen and (min-width: 48rem) {
    margin-right: ${props => (props.align === 'right' ? 0 : '3rem')};
    margin-left: ${props => (props.align === 'right' ? 'auto' : 0)};
  }
`;

const Dropdown = styled.div`
  z-index: 9999;
  overflow: hidden;
  position: absolute;
  margin-left: ${props => (props.align === 'left' ? 0 : '-1.5rem')};
  right: ${props => (props.align === 'right' ? 0 : 'auto')};
  margin-top: 1.5rem;
  padding: 1rem 1.5rem 1.5rem;
  background-color: #f3f3f3;

  ${props =>
    props.align === 'right' &&
    `
      margin-right: 0;
      margin-left: auto;
  `};
`;

class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  handleOutsideClick(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.handleClick(false);
    }
  }

  handleClick(on = true) {
    if (on === false && on === this.state.isOpened) return;
    this.props.childClick(this.state.isOpened);
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <Wrapper>
        <div
          ref={(node) => {
            this.node = node;
          }}
        >
          <Button
            onClick={this.handleClick}
            currentState={this.state.isOpened} // проецирует текущий стейт
            align={this.props.align}
            active={this.props.active} // то, что приходит с родителя
          >
            {this.props.name}
          </Button>
          {this.state.isOpened &&
            <Dropdown align={this.props.align}>
              {this.props.children}
            </Dropdown>}
        </div>
      </Wrapper>
    );
  }
}

FilterButton.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  childClick: PropTypes.func.isRequired,
};

export default FilterButton;
