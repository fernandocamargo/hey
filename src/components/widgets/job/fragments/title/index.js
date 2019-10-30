import slugify from 'slugify';
import { string } from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import withStyle from './style';

const Title = ({ className, id, title }) => (
  <h2 className={className}>
    <Link to={`/job/${id}/${slugify(title)}`.toLowerCase()}>{title}</Link>
  </h2>
);

Title.propTypes = {
  className: string.isRequired,
  id: string.isRequired,
  title: string.isRequired,
};

Title.defaultProps = {};

export default withStyle(Title);
