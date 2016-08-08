import React from 'react';
import { connect } from 'react-redux';
import { selectEntity, storeItems } from '../actions';
import { readEndpoint } from 'redux-json-api';
import SetTable from '../components/set_table.es6';

const mapStateToProps = ({ api, selected }) => {
  let props = {
    sets: api.biomaterial_sets.data.sort((a, b) => a.id - b.id),
    selected_set: null
  }

  if (selected.entity.type == 'biomaterial_sets') {
    props.selected_set = selected.entity.id;
  }

  return props;
}

const mapDispatchToProps = (dispatch, { selectable }) => {
  return {
    onSetClick: (id) => {
      dispatch(selectEntity(id, 'biomaterial_sets'));

      dispatch(readEndpoint(`biomaterial_sets/${id}?include=biomaterials`))
        .then((json) => {
          dispatch(storeItems(json.included));
        })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTable);
