import React from 'react';
import { connect } from 'react-redux';
import { selectSet } from '../actions';
import { readEndpoint } from 'redux-json-api';
import SetTable from '../components/set_table.es6';

const mapStateToProps = ({ api, selected }) => {
  return {
    sets: api.biomaterial_sets.data.sort((a, b) => a.id - b.id),
    selected_set: selected.biomaterial_set_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetClick: (id) => {
      dispatch(selectSet(id));
      dispatch(readEndpoint(`biomaterial_sets/${id}?include=biomaterials`));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTable);
