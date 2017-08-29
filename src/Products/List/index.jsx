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

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.stateUpdate = this.stateUpdate.bind(this);
  }

  stateUpdate(data) {
    this.setState({
      isActive: !data,
    });
  }

  render() {
    return (
      <main>
        <Helmet>
          <title>Men - Burberry</title>
        </Helmet>
        <Filter stateUpdate={this.stateUpdate} />
        <div style={{ position: 'relative' }}>
          <Products />
          <ShowMore />
          <ContentDarken currentState={this.state.isActive} />
        </div>
      </main>
    );
  }
}

export default List;
