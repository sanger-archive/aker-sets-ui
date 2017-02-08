import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { setEndpointHost, setEndpointPath, setHeaders } from 'redux-json-api';
import reducers from './reducers';

let initialState = {
  api: {
    sets:        { data: [] },
    materials:   { data: [] },
    collections: { data: [] },
    programs:    { data: [] }
  },
  materials: {},
  selected: {
    entity:             { type: null, id: null },
    entity_obj:         null,
    biomaterial_set_id: undefined,
    biomaterial_set:    null,
    collection_id:      undefined,
    collection:         null
  },
  browser: {
    items: [],
    selected: [],
    last_selected: null,
    last_shift_selected: []
  }
}

let store = createStore(reducers, initialState, applyMiddleware(thunk));

store.dispatch(setEndpointHost('http://dev.psd.sanger.ac.uk:9007'));
store.dispatch(setEndpointPath('/api/v1'));
store.dispatch(setHeaders({
  'Content-Type': 'application/vnd.api+json',
  Accept: 'application/vnd.api+json'
}));

export default store;