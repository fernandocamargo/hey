import React from 'react';

const Children = ({ components: { Container }, elements: { ordered } }) => (
  <Container>{ordered}</Container>
);

Children.propTypes = {};

Children.defaultProps = {};

export default Children;
