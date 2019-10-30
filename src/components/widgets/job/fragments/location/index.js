import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Location = ({ className, location }) => (
  <dl className={className}>
    <dt>Location</dt>
    <dd>{location}</dd>
  </dl>
);

Location.propTypes = {
  className: string.isRequired,
  location: string.isRequired,
};

Location.defaultProps = {};

export default withStyle(Location);
