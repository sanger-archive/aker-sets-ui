import { RECEIVE_ALL_STAMPS, RECEIVE_EMPTY_RESULTS, RECEIVE_EMPTY_STAMPS,
  FETCH_ALL_STAMPS, SELECT_STAMP, APPLY_STAMP, UNAPPLY_STAMP } from '../actions';

const stampsInfo = (state = {}, action) => {
  
  switch(action.type) {
    case FETCH_ALL_STAMPS:
      return Object.assign({}, state, {status: action.status});
    case RECEIVE_ALL_STAMPS:
    case RECEIVE_EMPTY_RESULTS:
    case RECEIVE_EMPTY_STAMPS:
      return Object.assign({}, state, { status: action.status, stamps: action.stamps } );
    case SELECT_STAMP:
      return Object.assign({}, state, {selectedStamp: action.selectedStamp});
    default:
      return state;
  }
}

export default stampsInfo;
