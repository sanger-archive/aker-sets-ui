import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import App from './layouts/inbox.es6';

import store from './store.es6';
import { getSelectedResource } from './selectors';

import { selectEntity } from './actions';
import { readEndpoint } from 'redux-json-api';

import $ from 'jquery';

const mapStateToProps = (state) => {
  return {
    entity: getSelectedResource(state),
    source: 'programs?include=collections,projects.aims.proposals'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id, type) => {
      dispatch(selectEntity(id, type));

      if (type == 'collections') {
        dispatch(readEndpoint(`collections/${id}?include=biomaterials`));
      }
    }
  }
}

let InboxApp = connect(mapStateToProps, mapDispatchToProps)(App);

render(
  <Provider store={store}>
    <InboxApp />
  </Provider>,
  document.getElementById('application')
)