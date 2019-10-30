import update from 'immutability-helper';
import { string, oneOf, shape, elementType } from 'prop-types';
import { useMemo, createElement } from 'react';

import Container from './container';
import {
  Title,
  Company,
  Location,
  Type,
  Description,
  Contact,
  Actions,
  Datetime,
} from './fragments';
import Children from './children';
import { types } from './fragments/type';

const components = {
  title: Title,
  company: Company,
  location: Location,
  type: Type,
  description: Description,
  contact: Contact,
  actions: Actions,
  datetime: Datetime,
};

const Job = ({ children, ...details }) => {
  const props = useMemo(
    () =>
      Object.entries(components).reduce(
        (stack, [type, component]) => {
          const element = createElement(component, { key: type, ...details });

          return update(stack, {
            elements: {
              ordered: { $push: [element] },
              unordered: { [type]: { $set: element } },
            },
          });
        },
        {
          components: { Container },
          elements: { ordered: [], unordered: {} },
          details,
        }
      ),
    [details]
  );

  return createElement(children, props);
};

Job.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  company: string.isRequired,
  location: string.isRequired,
  employment_type: oneOf(Object.keys(types)),
  contact: shape({
    website: string.isRequired,
    phone: string.isRequired,
    email: string.isRequired,
  }).isRequired,
  datetime: string.isRequired,
  children: elementType,
};

Job.defaultProps = {
  children: Children,
};

export default Job;
