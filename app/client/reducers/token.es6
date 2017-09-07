import {RECEIVE_TOKEN} from '../actions/index.es6';

const token = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TOKEN:
      return action.token;
    default:
      return state;
  }
}

export default token;