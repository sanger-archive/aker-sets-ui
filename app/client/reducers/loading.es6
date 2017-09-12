import * as actions from '../actions/loading.es6';

const loading = (state = {}, action) => {
  switch (action.type) {
    case actions.START_CREATE_SET:
      return Object.assign({}, state, { [action.loader]: true });
    case actions.START_ADD_MATERIALS_TO_SET:
      return Object.assign({}, state, { [action.loader]: true });
    case actions.START_REMOVE_MATERIALS_FROM_SET:
      return Object.assign({}, state, { [action.loader]: true });
    case actions.START_STAMPING:
      return Object.assign({}, state, { [action.loader]: true });
    case actions.STOP_ADD_MATERIALS_TO_SET:
      return Object.assign({}, state, { [action.loader]: false });
    case actions.STOP_REMOVE_MATERIALS_FROM_SET:
      return Object.assign({}, state, { [action.loader]: false });
    case actions.STOP_STAMPING:
      return Object.assign({}, state, { [action.loader]: false });
    case actions.STOP_CREATE_SET:
      return Object.assign({}, state, { [action.loader]: false });
    default:
      return state;
  }
}

export default loading;