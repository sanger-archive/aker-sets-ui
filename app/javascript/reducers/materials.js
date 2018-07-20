import { RECEIVE_MATERIALS } from '../actions/index';

const selected = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MATERIALS:

      if (action.links.prev) {
        action.links.first = { page: 1 };
      }

      return Object.assign({}, state, {
        [action.key]: {
          items: action.items,
          meta: action.meta,
          links: action.links
        }
      });
    default:
      return state;
  }
}

export default selected;