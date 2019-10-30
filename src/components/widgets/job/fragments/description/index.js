import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const renderParagraph = (children, key) => <p key={key}>{children}</p>;

const Description = ({ className, description }) => (
  <dl className={className}>
    <dt>Description</dt>
    <dd>{description.split('\n').map(renderParagraph)}</dd>
  </dl>
);

Description.propTypes = {
  className: string.isRequired,
  description: string.isRequired,
};

Description.defaultProps = {};

export default withStyle(Description);
