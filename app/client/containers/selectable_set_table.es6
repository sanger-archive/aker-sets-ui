import React from 'react';
import { connect } from 'react-redux';
import { select, fetchMaterials, storeItems } from '../actions';
import { readEndpoint } from 'redux-json-api';
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
    onSetClick: (id) => {
      dispatch(select(id, selectionType));

      dispatch(readEndpoint(`sets/${id}?include=materials`))
        .then((json) => {
          dispatch(fetchMaterials(json.included));
        })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTable);
