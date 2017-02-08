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
  collection_ids: ["f7b5d220-91d1-48b7-a668-0e737b412d6a"], // TODO real collection ids
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

store.dispatch(setEndpointHost('http://dev.psd.sanger.ac.uk:9007'));
store.dispatch(setEndpointPath('/api/v1'));
store.dispatch(setHeaders({
  'Content-Type': 'application/vnd.api+json',
  Accept: 'application/vnd.api+json'
}));

export default store;