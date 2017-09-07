import { RECEIVE_MATERIALS } from '../actions/index.es6';

const materials = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MATERIALS:
      // Materials come in as array of objects with _id
      // [{id, ...}, {id, ...}]

      // Need in the form of key being _id, value being object
      // { 'id': {...}, 'id2': {..}}
      let received_materials = action.materials.reduce((memo, material) => {
        material.id = material._id;
        delete material._id;
        memo[material.id] = material;
        return memo;
      }, {});

      return Object.assign({}, state, received_materials);
    default:
      return state;
  }
}

export default materials;