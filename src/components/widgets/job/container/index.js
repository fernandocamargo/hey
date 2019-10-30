import { string, node } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Container = ({ className, children }) => (
  <article className={className}>{children}</article>
);

Container.propTypes = {
  className: string.isRequired,
  children: node.isRequired,
};

Container.defaultProps = {};

export default withStyle(Container);
