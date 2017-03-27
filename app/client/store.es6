import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { setEndpointHost, setEndpointPath, setHeaders } from 'redux-json-api';
import reducers from './reducers';

let initialState = {
  api: {
    sets:        { data: [] },
    materials:   { data: [] }
  },
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
  }
}

let store = createStore(reducers, initialState, applyMiddleware(thunk));

store.dispatch(setEndpointHost(Aker.config.sets_root));
store.dispatch(setEndpointPath('/api/v1'));
store.dispatch(setHeaders({
  'Content-Type': 'application/vnd.api+json',
  Accept: 'application/vnd.api+json'
}));

export default store;