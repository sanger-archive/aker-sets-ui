import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import App from './layouts/work_orders.es6';

import { readEndpoint } from 'redux-json-api';

import $ from 'jquery';

import store from './store.es6';
import { getSelectedSet } from './selectors';

store.dispatch(readEndpoint('products'));
store.dispatch(readEndpoint('biomaterial_sets'));

const mapStateToProps = (state) => {
  return { set: getSelectedSet(state) };
};

let WorkOrdersApp = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <WorkOrdersApp />
  </Provider>,
  document.getElementById('application')
)