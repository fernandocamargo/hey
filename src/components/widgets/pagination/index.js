import { stringify } from 'query-string';
import { string, oneOfType, number } from 'prop-types';
import React, { useMemo, useCallback } from 'react';

import Page from './page';
import withStyle from './style';

const Pagination = ({ page: current, className, total, ...querystring }) => {
  const pages = useMemo(() => Array.from({ length: total }), [total]);
  const renderPage = useCallback(
    (_, index) => {
      const page = index + 1;
      const url = `/?${stringify({ ...querystring, page })}`;
      const active = page === parseInt(current, 10);

      return <Page key={page} page={page} url={url} active={active} />;
    },
    [current, querystring]
  );

  return (
    <nav className={className}>
      <h3>Browse through:</h3>
      <ul>{pages.map(renderPage)}</ul>
    </nav>
  );
};

Pagination.propTypes = {
  className: string.isRequired,
  keywords: string.isRequired,
  type: string.isRequired,
  page: oneOfType([string.isRequired, number.isRequired]).isRequired,
};

Pagination.defaultProps = {};

export default withStyle(Pagination);
