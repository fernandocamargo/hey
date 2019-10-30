import { shape, elementType, node } from 'prop-types';
import React from 'react';

const Details = ({
  components: { Container },
  elements: {
    unordered: { title, type, company, location, actions, datetime },
  },
}) => (
  <Container>{[title, type, company, location, actions, datetime]}</Container>
);

Details.propTypes = {
  components: shape({
    Container: elementType.isRequired,
  }).isRequired,
  elements: shape({
    unordered: shape({
      title: node.isRequired,
      type: node.isRequired,
      company: node.isRequired,
      location: node.isRequired,
      actions: node.isRequired,
      datetime: node.isRequired,
    }).isRequired,
  }).isRequired,
};

Details.defaultProps = {};

export default Details;
