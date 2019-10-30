import { shape, string } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import { useQueryString } from 'hooks';
import { Page, Pagination } from 'components/widgets';

import Result from './result';
import { selectFromQuerystring } from './selectors';
import withStyle from './style';

const HomePage = ({ className, location }) => {
  const querystring = useQueryString(location);
  const { results, pages, found } = useSelector(
    selectFromQuerystring(querystring)
  );

  return (
    <Page title="Home">
      <section className={className}>
        <h1>Latest jobs ({found} found)</h1>
        {results.map(Result)}
        <Pagination total={pages} {...querystring} />
      </section>
    </Page>
  );
};

HomePage.propTypes = {
  className: string.isRequired,
  location: shape({ search: string.isRequired }).isRequired,
};

HomePage.defaultProps = {};

export default withStyle(HomePage);
