import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { setEndpointHost, setEndpointPath } from 'redux-json-api';
import reducers from './reducers';

let initialState = {
  api: {
    biomaterial_sets: { data: [] },
    biomaterials:     { data: [] },
    collections:      { data: [] },
    products:         { data: [] },
    programs:         { data: [] },
    proposals:        { data: [] },
    product_options:  { data: [] },
    product_option_values: { data: [] }
  },
  selected: {
    biomaterial_set_id: undefined,
    biomaterial_set:    null,
    collection_id:      undefined,
    collection:         null,
    entity:             { type: null, id: null },
    entity_obj:         null,
    product_id:         undefined,
    product:            null,
  },
  browser: {
    items: [],
    selected: [],
    last_selected: null,
    last_shift_selected: []
  }
}

let store = createStore(reducers, initialState, applyMiddleware(thunk));

store.dispatch(setEndpointHost(''));
store.dispatch(setEndpointPath('/api/v1'));

export default store;