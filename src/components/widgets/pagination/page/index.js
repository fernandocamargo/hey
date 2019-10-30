import { string, number, bool } from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import withStyle from './style';

const Page = ({ className, page, url, active }) => {
  const current = active ? 'page' : '';

  return (
    <li className={className} aria-current={current}>
      <Link to={url} title={`Go to the page ${page}`}>
        <span>Page </span>
        <strong>{page}</strong>
      </Link>
    </li>
  );
};

Page.propTypes = {
  className: string.isRequired,
  page: number.isRequired,
  url: string.isRequired,
  active: bool,
};

Page.defaultProps = {
  active: false,
};

export default withStyle(Page);
