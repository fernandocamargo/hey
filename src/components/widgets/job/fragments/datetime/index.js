import moment from 'moment';
import { string } from 'prop-types';
import React, { useMemo } from 'react';

import withStyle from './style';

const Datetime = ({ className, datetime }) => {
  const instance = useMemo(() => moment(datetime), [datetime]);
  const title = useMemo(() => instance.format('LLLL'), [instance]);
  const label = useMemo(() => instance.fromNow(), [instance]);

  return (
    <dl className={className}>
      <dt>Date & time</dt>
      <dd>
        <span title={title}>{label}</span>
      </dd>
    </dl>
  );
};

Datetime.propTypes = {
  className: string.isRequired,
  datetime: string.isRequired,
};

Datetime.defaultProps = {};

export default withStyle(Datetime);
