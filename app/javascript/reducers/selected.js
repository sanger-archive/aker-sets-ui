import { SELECT, CLEAR_SELECTED } from '../actions/index';

const selected = (state = {}, action) => {
  switch (action.type) {
    case SELECT:
      return Object.assign({}, state, { [action.selectionType]: action.id }, );
    case CLEAR_SELECTED:
      return {};
    default:
      return state;
  }
}

export default selected;