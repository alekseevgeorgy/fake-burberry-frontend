import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Filter from './Filter';
import Products from './Products';
import ShowMore from './ShowMore';

const ContentDarken = styled.div`
  position: absolute;
  display: ${props => (props.currentState ? 'block' : 'none')};
  background-color: #000000;
  height: 100%;
  width: 100%;
  top: 0;
  opacity: .3;
`;

const Wrapper = styled.div`position: relative;`;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.updateParentState = this.updateParentState.bind(this);
  }

  updateParentState() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <main>
        <Helmet>
          <title>Men - Burberry</title>
        </Helmet>
        <Filter updateParentState={this.updateParentState} />
        <Wrapper>
          <Products />
          <ShowMore />
          <ContentDarken currentState={this.state.isActive} />
        </Wrapper>
      </main>
    );
  }
}

export default List;
