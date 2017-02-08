import React from 'react';
import { connect } from 'react-redux';
import { selectSet, fetchMaterials } from '../actions';
import { readEndpoint } from 'redux-json-api';
import SetTable from '../components/set_table.es6';

const mapStateToProps = ({ api, selected }) => {
  return {
    sets: api.sets.data.slice().sort((a, b) => a.attributes.created_at.localeCompare(b.attributes.created_at)),
    selected_set: selected.biomaterial_set_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetClick: (id) => {
      dispatch(selectSet(id));
      dispatch(readEndpoint(`sets/${id}?include=materials`))
        .then((json) => {
          dispatch(fetchMaterials(json.included))
        });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTable);
