import update from 'immutability-helper';
import { shape, string } from 'prop-types';
import React, { useRef, useState, useCallback, useEffect } from 'react';

import { useQueryString } from 'hooks';

import withStyle from './style';

const types = [
  { label: 'Any', value: '' },
  { label: 'Full time', value: 'full_time' },
  { label: 'Part-time', value: 'part_time' },
  { label: 'Contract', value: 'contract' },
  { label: 'Internship', value: 'internship' },
];

const pageSizes = [
  { label: 5, value: 5 },
  { label: 10, value: 10 },
  { label: 15, value: 15 },
  { label: 25, value: 25 },
  { label: 50, value: 50 },
];

const Filter = ({ className, location }) => {
  const ref = useRef();
  const {
    keywords: defaultKeywords,
    type: defaultType,
    pageSize: defaultPageSize,
  } = useQueryString(location);
  const [keywords, setKeywords] = useState(defaultKeywords);
  const [type, setType] = useState(defaultType);
  const [{ start, end }, setDate] = useState({ start: '', end: '' });
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const onChange = useCallback(
    set => ({ target: { value } }) => set(value),
    []
  );
  const onDateChange = useCallback(
    ({ target: { name, value } }) =>
      setDate(date => update(date, { [name]: { $set: value } })),
    []
  );
  const renderOption = useCallback(
    ({ label, value }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ),
    []
  );

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <form action="/" className={className}>
      <fieldset>
        <legend>Filter the results based on the following criteria:</legend>
        <div>
          <dl>
            <dt>
              <label htmlFor="keywords">Keywords</label>
            </dt>
            <dd>
              <input
                type="text"
                name="keywords"
                id="keywords"
                value={keywords}
                onChange={onChange(setKeywords)}
                ref={ref}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="type">Type</label>
            </dt>
            <dd>
              <select
                name="type"
                id="type"
                value={type}
                onChange={onChange(setType)}
              >
                {types.map(renderOption)}
              </select>
            </dd>
          </dl>
          <dl>
            <dt>Date</dt>
            <dd>
              <dl>
                <dt>
                  <label htmlFor="start">Start</label>
                </dt>
                <dt>
                  <input
                    type="date"
                    name="start"
                    id="start"
                    value={start}
                    onChange={onDateChange}
                  />
                </dt>
              </dl>
              <dl>
                <dt>
                  <label htmlFor="end">End</label>
                </dt>
                <dt>
                  <input
                    type="date"
                    name="end"
                    id="end"
                    value={end}
                    onChange={onDateChange}
                  />
                </dt>
              </dl>
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="pageSize">Page size</label>
            </dt>
            <dd>
              <select
                name="pageSize"
                id="pageSize"
                value={pageSize}
                onChange={onChange(setPageSize)}
              >
                {pageSizes.map(renderOption)}
              </select>
            </dd>
          </dl>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
};

Filter.propTypes = {
  className: string.isRequired,
  location: shape({ search: string.isRequired }).isRequired,
};

Filter.defaultProps = {};

export default withStyle(Filter);
