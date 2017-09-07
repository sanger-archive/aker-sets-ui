import {SELECT} from '../actions/index.es6';

const selected = (state = {}, action) => {
  switch (action.type) {
    case SELECT:
      return Object.assign({}, state, { [action.selectionType]: action.id }, );
    default:
      return state;
  }
}

export default selected;