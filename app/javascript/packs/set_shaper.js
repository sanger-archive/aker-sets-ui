import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import App from 'layouts/set_shaper';

import { selectEntity, storeItems, fetchSetAndMaterials, setUserEmail } from 'actions';
import { getSelectedTop, getSelectedBottom, getUserSets } from 'selectors';
import store from 'store';

store.dispatch(setUserEmail(Aker.userEmail));

const mapStateToProps = (state) => {
  return {
    selectedTopSet: getSelectedTop(state),
    selectedBottomSet: getSelectedBottom(state),
    userEmail: state.userEmail,
    sets: state.api.sets.data,
    userSets: getUserSets(state),
    materials: state.materials
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
