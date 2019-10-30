import update from 'immutability-helper';

import { TOGGLE_MARK_AS_STARRED } from './constants';

const initialState = { starred: [] };

const settings = (state = initialState, { type, id }) => {
  switch (type) {
    case TOGGLE_MARK_AS_STARRED:
      return update(state, {
        starred: {
          $apply: starred => {
            const index = starred.indexOf(id);

            return update(
              starred,
              index < 0 ? { $push: [id] } : { $splice: [[index, 1]] }
            );
          },
        },
      });
    default:
      return state;
  }
};

export default settings;
