import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { setEndpointHost, setEndpointPath, setHeaders } from 'redux-json-api';
import reducers from './reducers';

let initialState = {
  api: {
    sets:        { data: [] },
    materials:   { data: [] },
  },
  stampsInfo: { stamps: [], status: 'init', selectedStamp: null },
  materials: {},
  collection_ids: [],
  selected: {
    top: null,
    bottom: null
  },
  browser: {
    items: [],
    selected: [],
    last_selected: null,
    last_shift_selected: []
  },
  token: null,
  search: {
    fields: {},
    filters: [
      { id: 1, name: '', comparator: '', value: '' }
    ],
    current: [],
    results: [],
    links: {},
  }
}

let store = createStore(reducers, initialState, applyMiddleware(thunk));

store.dispatch(setEndpointHost('/sets_service'));
store.dispatch(setEndpointPath(''));
store.dispatch(setHeaders({
  'Content-Type': 'application/vnd.api+json',
  Accept: 'application/vnd.api+json'
}));

export default store;