import {RECEIVE_TOKEN} from '../actions';

const token = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TOKEN:
      return action.token;
    default:
      return state;
  }
}

export default token;