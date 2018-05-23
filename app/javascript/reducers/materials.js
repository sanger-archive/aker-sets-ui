import { RECEIVE_MATERIALS } from '../actions/index';

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

      let newstate = {}
      newstate[action.setId] = {instances: received_materials, links: action.links, page: action.page, url: action.url }

      return Object.assign({}, state, newstate);
    default:
      return state;
  }
}

export default materials;