import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { getAllSets, fetchMaterialSchema, fetchAllStamps } from './actions/index.es6';

import App from './layouts/search.es6';

import store from './store.es6';

store.dispatch(getAllSets())
store.dispatch(fetchMaterialSchema())
store.dispatch(fetchAllStamps())

// Don't want to cache any of our requests
$.ajaxSetup({ cache: false })

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
};

let SearchApp = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <SearchApp />
  </Provider>,
  document.getElementById('application')
);