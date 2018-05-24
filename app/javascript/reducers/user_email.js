import { SET_USER_EMAIL } from '../actions/index';

const userEmail = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return action.userEmail;
    default:
      return state;
  }
}

export default userEmail;