import { RECEIVE_ALL_STAMPS, FETCH_ALL_STAMPS, SELECT_STAMP, APPLY_STAMP, UNAPPLY_STAMP } from '../actions';

const stampsInfo = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case FETCH_ALL_STAMPS:
      return Object.assign({}, state, {status: 'fetching'})
    case RECEIVE_ALL_STAMPS:
      return Object.assign({}, state, {status: 'received', stamps: action.stamps } );
    case SELECT_STAMP:
      return Object.assign({}, state, {selectedStamp: action.selectedStamp});
    default:
      console.log(action);
      return state;
  }
}

export default stampsInfo;
