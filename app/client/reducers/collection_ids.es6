import { RECEIVE_COLLECTIONS } from '../actions';

const collection_ids = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_COLLECTIONS:
      // We're only going to store the ids of the collections. Their information can be looked up from sets.
      return [...state, ...action.collections.map((collection) => collection.attributes['set-id'])];
    default:
      return state;
  }
};

export default collection_ids;