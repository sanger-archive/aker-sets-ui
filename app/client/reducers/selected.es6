import {SELECT_SET, SELECT_COLLECTION, SELECT_PRODUCT, SELECT_ENTITY} from '../actions';

const selected = (state = {}, action) => {
  switch (action.type) {
    case SELECT_SET:
      return Object.assign({}, state, { biomaterial_set_id: action.id }, );
    case SELECT_COLLECTION:
      return Object.assign({}, state, { collection_id: action.id });
    case SELECT_PRODUCT:
      return Object.assign({}, state, { product_id: action.id });
    case SELECT_ENTITY:
      return Object.assign({}, state, { entity: { type: action.entity.type, id: action.entity.id }})
    default:
      return state;
  }
}

export default selected;