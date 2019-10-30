import { string } from 'prop-types';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleMarkAsRead } from 'reducers/settings/actions';

import { selectById } from './selectors';
import withStyle from './style';

const Marker = ({ className, id }) => {
  const dispatch = useDispatch();
  const { starred } = useSelector(selectById(id));
  const onChange = useCallback(() => dispatch(toggleMarkAsRead(id)), [
    dispatch,
    id,
  ]);
  const identity = `marker-${id}`;

  return (
    <form className={className}>
      <fieldset>
        <legend>Mark this job</legend>
        <dl>
          <dt>Starred</dt>
          <dd>
            <input
              type="checkbox"
              id={identity}
              checked={starred}
              onChange={onChange}
            />
            <label htmlFor={identity}>This job is marked as starred</label>
          </dd>
        </dl>
      </fieldset>
    </form>
  );
};

Marker.propTypes = {
  className: string.isRequired,
};

Marker.defaultProps = {};

export default withStyle(Marker);
