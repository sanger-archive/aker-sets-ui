import React from 'react';
import { connect } from 'react-redux';
import { select, fetchFirstPageSetAndMaterials, storeItems } from '../actions/index.es6';
import SetTable from '../components/set_table.es6';

const mapStateToProps = ({ api, selected }, { setIdList, selectionType }) => {
  let sets = api.sets.data;
  if (Array.isArray(setIdList)) {
    sets = sets.filter((s) => setIdList.includes(s.id));
  } else {
    sets = sets.slice();
  }
  sets.sort((a, b) => a.attributes.created_at.localeCompare(b.attributes.created_at));

  return {
    sets: sets,
    selected_set: selected[selectionType]
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
