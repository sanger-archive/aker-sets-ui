import jwt_decode from "jwt-decode"
import { setHeader, readEndpoint } from "redux-json-api"

export const SELECT = "SELECT";
export const select = (id, selectionType) => {
  return {
    type: SELECT,
    id,
    selectionType
  }
}

export const SELECT_ENTITY = "SELECT_ENTITY";
export const selectEntity = (id, entityType) => {
  return {
    type: SELECT_ENTITY,
    entity: { id, type: entityType }
  }
}

export const STORE_ITEMS = "STORE_ITEMS";
export const storeItems = (items) => {
  return {
    type: STORE_ITEMS,
    items
  }
}

export const SELECT_ITEM = "SELECT_ITEM";
export const selectItem = (key) => {
  return {
    type: SELECT_ITEM,
    key
  }
}

export const CLEAR_SELECTION = "CLEAR_SELECTION";
export const clearSelection = () => {
  return {
    type: CLEAR_SELECTION
  }
}

export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const toggleItem = (key) => {
  return {
    type: TOGGLE_ITEM,
    key
  }
}

export const SHIFT_SELECT_ITEMS = "SHIFT_SELECT_ITEMS";
export const shiftSelectItems = (key) => {
  return {
    type: SHIFT_SELECT_ITEMS,
    key
  }
}

export const RECEIVE_MATERIALS = "RECEIVE_MATERIALS";
export const receiveMaterials = (materials) => {
  return {
    type: RECEIVE_MATERIALS,
    materials
  }
}

const BATCH_SIZE = 25;
export const FETCH_MATERIALS = "FETCH_MATERIALS";
export const fetchMaterials = (materials) => {
  return function(dispatch) {
    if (!materials) return false;

    // We need to fetch materials in batches, otherwise the url params get too long
    if (materials.length > BATCH_SIZE) {
      dispatch(fetchMaterials(materials.splice(BATCH_SIZE)))
    }

    const ids = materials.map((material) => material.id);

    const params = encodeURIComponent(`{"_id" : { "$in": ["${ids.join('","')}"] } }`);
    const url    = `/materials_service/materials?where=${params}`;

    $.ajax({
      url,
      contentType: "application/json",
      accept: "application/json",
      jsonp: false })
      .then(function(response) {
        dispatch(receiveMaterials(response._items))
      });
  }
}

export const RECEIVE_COLLECTIONS = "RECEIVE_COLLECTIONS";
export const receiveCollections = (collections) => {
  return {
    type: RECEIVE_COLLECTIONS,
    collections
  }
}

export const FETCH_SET_AND_MATERIALS = "FETCH_SET_AND_MATERIALS";
export const fetchSetAndMaterials = function(setId) {
  return function(dispatch) {
    dispatch(fetchTokenIfNeeded())
      .then(() => { return dispatch(readEndpoint(`sets/${setId}?include=materials`)) })
      .then((json) => { return dispatch(fetchMaterials(json.included)) });
  }
}

export const FETCH_COLLECTIONS = "FETCH_COLLECTIONS";
export const fetchCollections = function() {
  return function(dispatch, getState) {
    dispatch(fetchTokenIfNeeded())
      .then(function() {
        return $.ajax({
          url: "/studies_service/collections",
          contentType: "application/vnd.api+json",
          accept: "application/vnd.api+json",
          headers: {
            "X-Authorisation": getState().token
          },
          jsonp: false
        })
      })
      .then(function(response) {
        dispatch(receiveCollections(response.data))
      });
  }
}

export const FETCH_TOKEN_IF_NEEDED = "FETCH_TOKEN_IF_NEEDED";
export const fetchTokenIfNeeded = () => {
  return function(dispatch, getState) {
    let token = getState().token;

    if (!token || isExpired(token)) {
      return dispatch(fetchToken());
    }

    return $.Deferred().resolve();
  }
}

const isExpired = (token) => {
  const payload = jwt_decode(token);
  return payload.exp < Date.now()/1000;
}

export const FETCH_TOKEN = "FETCH_TOKEN";
export const fetchToken = () => {
  return (dispatch, getState) => {
    return $.ajax({
      method: 'POST',
      url: "/token",
      accept: "application/json",
    })

    // Put the token in the Store
    .then(function(response) {
      return dispatch(receiveToken(response.token))
    })

    // Set it as a default header for redux-json-api
    .then(function() {
      return dispatch(setHeader({"X-Authorisation": getState().token}));
    });
  }
}

export const RECEIVE_TOKEN = "RECEIVE_TOKEN";
export const receiveToken = (token) => {
  return {
    type: RECEIVE_TOKEN,
    token
  }
}

export const FETCH_MATERIAL_SCHEMA = "FETCH_MATERIAL_SCHEMA";
export const fetchMaterialSchema = () => {
  return (dispatch, getState) => {
    return $.ajax({
      method: 'GET',
      url: "/materials_service/materials/schema",
      accept: "application/json",
    })

    .then((response) => {
      return dispatch(receiveMaterialSchema(response));
    });
  }
}

export const RECEIVE_MATERIAL_SCHEMA = "RECEIVE_MATERIAL_SCHEMA";
export const receiveMaterialSchema = (response) => {
  return {
    type: RECEIVE_MATERIAL_SCHEMA,
    schema: response
  }
}

export const UPDATE_FILTER_NAME = "UPDATE_FILTER_NAME";
export const updateFilterName = (index, value) => {
  return {
    type: UPDATE_FILTER_NAME,
    index,
    value
  }
}

export const UPDATE_FILTER_COMPARATOR = "UPDATE_FILTER_COMPARATOR"
export const updateFilterComparator = (index, value) => {
  return {
    type: UPDATE_FILTER_COMPARATOR,
    index,
    value
  }
}

export const UPDATE_FILTER_VALUE = "UPDATE_FILTER_VALUE"
export const updateFilterValue = (index, value) => {
  return {
    type: UPDATE_FILTER_VALUE,
    index,
    value
  }
}

export const REMOVE_FILTER = "REMOVE_FILTER"
export const removeFilter = (index) => {
  return {
    type: REMOVE_FILTER,
    index
  }
}

export const ADD_FILTER = "ADD_FILTER"
export const addFilter = () => {
  return {
    type: ADD_FILTER
  }
}

export const SET_CURRENT_SEARCH = "SET_CURRENT_SEARCH"
export const setCurrentSearch = () => {
  return {
    type: SET_CURRENT_SEARCH
  }
}
