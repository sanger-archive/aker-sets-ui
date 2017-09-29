import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import App from './layouts/set_shaper.es6';

import { selectEntity, storeItems, fetchSetAndMaterials, setUserEmail } from './actions';
import { readEndpoint } from 'redux-json-api';
import { getSelectedTop, getSelectedBottom, getUserSets } from './selectors';
import store from './store.es6';

// Don't want to cache any of our requests
$.ajaxSetup({ cache: false })

// Load the sets up front
store.dispatch(readEndpoint('sets'));

store.dispatch(setUserEmail(Aker.userEmail));

setInterval(() => {
  let selected = store.getState().selected;

  for (let position in selected) {
    if (selected[position]) store.dispatch(fetchSetAndMaterials(selected[position], 1, 25));
  }
}, 10000)

const mapStateToProps = (state) => {
  return {
    set: getSelectedTop(state),
    resource: getSelectedBottom(state),
    user_set_ids: getUserSets(state)
  };
};

// Make the App "smart"
let SetShaperApp = connect(mapStateToProps)(App);

// Give it the drag and drop context
// https://gaearon.github.io/react-dnd/docs-drag-drop-context.html
SetShaperApp = DragDropContext(HTML5Backend)(SetShaperApp);

render(
  <Provider store={store}>
    <SetShaperApp />
  </Provider>,
  document.getElementById('application')
);