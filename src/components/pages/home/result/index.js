import { string } from 'prop-types';
import React from 'react';

import { Job } from 'components/widgets';

import Details from './details';

const Result = props => {
  const { id } = props;

  return (
    <Job key={id} {...props}>
      {Details}
    </Job>
  );
};

Result.propTypes = {
  id: string.isRequired,
};

Result.defaultProps = {};

export default Result;
