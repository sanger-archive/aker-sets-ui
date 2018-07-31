import React from 'react';
import { connect } from 'react-redux';
import { select } from '../actions/browser';
import SetTable from '../components/set_table';

const mapStateToProps = (state, { sets, selectionType }) => {
  // Make a copy so we don't mutate the store
  let setsCopy = sets.slice();

  // Sort by created_at DESC
  setsCopy.sort((a, b) => b.attributes.created_at.localeCompare(a.attributes.created_at));

  return {
    sets: setsCopy,
    selectedSet: state.selected[selectionType]
  }
}

const mapDispatchToProps = (dispatch, { selectionType, onSetClick }) => {
  return {
    onSetClick: (setId) => {
      dispatch(select(setId, selectionType));
      onSetClick(setId);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTable);
