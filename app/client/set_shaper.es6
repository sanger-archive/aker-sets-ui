import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import App from './layouts/set_shaper.es6';

import { selectEntity, storeItems } from './actions';
import { readEndpoint } from 'redux-json-api';
import { getSelectedTop, getSelectedBottom } from './selectors';
import store from './store.es6';

// Load the sets up front
store.dispatch(readEndpoint('sets'));

const mapStateToProps = (state) => {
  return {
    set: getSelectedTop(state),
    collection_ids: state.collection_ids,
    entity: getSelectedBottom(state),
    source: 'programs?include=collections'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id, type) => {
      if (type != 'collections') return;

      dispatch(selectEntity(id, 'collections'));

      dispatch(readEndpoint(`sets/${id}?include=materials`))
        .then( json => dispatch(storeItems(json.included)) )
    }
  }
}

// Make the App "smart"
let SetShaperApp = connect(mapStateToProps, mapDispatchToProps)(App);

// Give it the drag and drop context
// https://gaearon.github.io/react-dnd/docs-drag-drop-context.html
SetShaperApp = DragDropContext(HTML5Backend)(SetShaperApp);

render(
  <Provider store={store}>
    <SetShaperApp />
  </Provider>,
  document.getElementById('application')
)