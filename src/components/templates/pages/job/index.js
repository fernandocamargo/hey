import { string, shape } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import { Page, Job } from 'components/widgets';

import Details from './details';
import { selectById } from './selectors';
import withStyle from './style';

const JobPage = ({ pageContext: { id }, className, location }) => {
  const job = useSelector(selectById(id));
  const { title, description } = job;

  return (
    <Page title={title} description={description}>
      <section className={className}>
        <h1>Go back to the results</h1>
        <pre>{JSON.stringify(location, null, 2)}</pre>
        <Job {...job}>{Details}</Job>
      </section>
    </Page>
  );
};

JobPage.propTypes = {
  className: string.isRequired,
  pageContext: shape({
    id: string.isRequired,
  }).isRequired,
};

JobPage.defaultProps = {};

export default withStyle(JobPage);
