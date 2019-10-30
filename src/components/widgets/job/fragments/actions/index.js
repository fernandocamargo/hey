import { string } from 'prop-types';
import React from 'react';

import { Marker } from 'components/widgets';

import withStyle from './style';

const Actions = ({ className, id }) => (
  <dl className={className}>
    <dt>Actions</dt>
    <dd>
      <Marker id={id} />
    </dd>
  </dl>
);

Actions.propTypes = {
  className: string.isRequired,
  id: string.isRequired,
};

Actions.defaultProps = {};

export default withStyle(Actions);
