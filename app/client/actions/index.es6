export const SELECT = 'SELECT';
export const select = (id, selectionType) => {
  return {
    type: SELECT,
    id,
    selectionType
  }
}

export const SELECT_ENTITY = 'SELECT_ENTITY';
export const selectEntity = (id, entityType) => {
  return {
    type: SELECT_ENTITY,
    entity: { id, type: entityType }
  }
}

export const STORE_ITEMS = 'STORE_ITEMS';
export const storeItems = (items) => {
  return {
    type: STORE_ITEMS,
    items
  }
}

export const SELECT_ITEM = 'SELECT_ITEM';
export const selectItem = (key) => {
  return {
    type: SELECT_ITEM,
    key
  }
}

export const CLEAR_SELECTION = 'CLEAR_SELECTION';
export const clearSelection = () => {
  return {
    type: CLEAR_SELECTION
  }
}

export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const toggleItem = (key) => {
  return {
    type: TOGGLE_ITEM,
    key
  }
}

export const SHIFT_SELECT_ITEMS = 'SHIFT_SELECT_ITEMS';
export const shiftSelectItems = (key) => {
  return {
    type: SHIFT_SELECT_ITEMS,
    key
  }
}

export const RECEIVE_MATERIALS = 'RECEIVE_MATERIALS';
export const receiveMaterials = (materials) => {
  return {
    type: RECEIVE_MATERIALS,
    materials
  }
}

export const FETCH_MATERIALS = 'FETCH_MATERIALS';
export const fetchMaterials = (materials) => {
  return function(dispatch) {
    if (!materials) return false;

    const ids = materials.map((material) => material.id);

    $.ajax({
      url: `${Aker.config.materials_root}/materials?where={"_id" : { "$in": ["${ids.join('","')}"] } }`,
      contentType: "application/json",
      accept: "application/json",
      jsonp: false })
      .then(function(response) {
        dispatch(receiveMaterials(response._items))
      });
  }
}

export const RECEIVE_COLLECTIONS = 'RECEIVE_COLLECTIONS';
export const receiveCollections = (collections) => {
  return {
    type: RECEIVE_COLLECTIONS,
    collections
  }
}

export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export const fetchCollections = () => {
  return function(dispatch) {
    $.ajax({
      url: `${Aker.config.study_root}/collections`,
      contentType: "application/vnd.api+json",
      accept: "application/vnd.api+json",
      jsonp: false })
      .then(function(response) {
        dispatch(receiveCollections(response.data))
      });
  }
}