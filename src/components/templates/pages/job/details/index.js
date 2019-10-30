import { string, shape, elementType, arrayOf, node } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Details = ({
  components: { Container },
  elements: {
    ordered: [, ...fragments],
  },
  details: { title },
  className,
}) => (
  <section className={className}>
    <Container>
      <h1>{title}</h1>
      {fragments}
    </Container>
  </section>
);

Details.propTypes = {
  className: string.isRequired,
  components: shape({
    Container: elementType.isRequired,
  }).isRequired,
  elements: shape({
    ordered: arrayOf(node.isRequired).isRequired,
  }),
  details: shape({
    title: string.isRequired,
  }),
};

Details.defaultProps = {};

export default withStyle(Details);
