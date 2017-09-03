import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SizeSt = styled.p`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: #171717;
`;

const ButtonHelp = styled.button`
  padding: 0;
  border: none;
  background-color: inherit;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: #171717;
`;

export default function Size(props) {
  return (
    <Wrapper>
      <SizeSt>
        Size: <b>{props.size}</b>
      </SizeSt>
      <ButtonHelp>NEED SIZE HELP?</ButtonHelp>
    </Wrapper>
  );
}

Size.propTypes = {
  size: PropTypes.string.isRequired,
};
