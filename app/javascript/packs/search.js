import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { getAllSets, fetchMaterialSchema, fetchAllStamps, setUserEmail } from 'actions/index';

import App from 'layouts/search';

import store from 'store';

store.dispatch(setUserEmail(Aker.userEmail));
store.dispatch(getAllSets())
store.dispatch(fetchMaterialSchema())
store.dispatch(fetchAllStamps())

// Don't want to cache any of our requests
$.ajaxSetup({ cache: false })

const mapStateToProps = (state) => {
  return {
    search: state.search,
    loading: state.loading
  }
};

let SearchApp = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <SearchApp />
  </Provider>,
  document.getElementById('application')
);
