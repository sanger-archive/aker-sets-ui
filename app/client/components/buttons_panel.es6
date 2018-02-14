import React from 'react';
import { connect } from 'react-redux';
import ButtonsPanelContainer from '../containers/buttons_panel_container.es6';
import { createSetFromSearch, addMaterialsToSetFromSearch, removeMaterialsFromSetFromSearch } from '../actions/index.es6';

const mapStateToProps = (state) => {
  return {
    sets: state.search.sets,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewSet: (setName) => dispatch(createSetFromSearch(setName)),
    addMaterialsToSet: (setId) => dispatch(addMaterialsToSetFromSearch(setId)),
    removeMaterialsFromSet: (setId) => dispatch(removeMaterialsFromSetFromSearch(setId))
  }
}

const ButtonsPanel = connect(mapStateToProps, mapDispatchToProps)(ButtonsPanelContainer);
export default ButtonsPanel;