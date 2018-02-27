import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import App from './layouts/set_shaper.es6';

import { selectEntity, storeItems, fetchSetAndMaterials, setUserEmail } from './actions';
import { getSelectedTop, getSelectedBottom, getSelectedTopPage, getSelectedBottomPage, getUserSets } from './selectors';
import store from './store.es6';

store.dispatch(setUserEmail(Aker.userEmail));

setInterval(() => {
  let state = store.getState();
  let selected = state.selected;

  if (selected['top']) {
    let pageNumber = getSelectedTopPage(state);
    if (pageNumber) {
      store.dispatch(fetchSetAndMaterials(selected['top'], pageNumber, 25));
    }
  }
  if (selected['bottom']) {
    let pageNumber = getSelectedBottomPage(state);
    if (pageNumber) {
      store.dispatch(fetchSetAndMaterials(selected['bottom'], pageNumber, 25));
    }
  }
}, 10000)

const mapStateToProps = (state) => {
  return {
    selectedTopSet: getSelectedTop(state),
    selectedBottomSet: getSelectedBottom(state),
    userEmail: state.userEmail,
    sets: state.api.sets.data,
    userSets: getUserSets(state)
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
