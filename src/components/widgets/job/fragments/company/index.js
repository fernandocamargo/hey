import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Company = ({ className, company }) => (
  <dl className={className}>
    <dt>Company</dt>
    <dd>{company}</dd>
  </dl>
);

Company.propTypes = {
  className: string.isRequired,
  company: string.isRequired,
};

Company.defaultProps = {};

export default withStyle(Company);
