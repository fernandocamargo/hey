import { string, oneOf } from 'prop-types';
import React from 'react';

import withStyle from './style';

export const types = {
  full_time: 'Full time',
  part_time: 'Part-time',
  contract: 'Contract',
  internship: 'Internship',
};

const Type = ({ className, employment_type }) => (
  <dl className={className}>
    <dt>Type</dt>
    <dd>{types[employment_type]}</dd>
  </dl>
);

Type.propTypes = {
  className: string.isRequired,
  employment_type: oneOf(Object.keys(types)),
};

Type.defaultProps = {};

export default withStyle(Type);
