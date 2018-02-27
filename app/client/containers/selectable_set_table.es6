import React from 'react';
import { connect } from 'react-redux';
import { select, fetchFirstPageSetAndMaterials } from '../actions/index.es6';
import SetTable from '../components/set_table.es6';

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

const mapDispatchToProps = (dispatch, { selectionType }) => {
  return {
    onSetClick: (setId) => {
      dispatch(select(setId, selectionType));
      dispatch(fetchFirstPageSetAndMaterials(setId));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTable);
