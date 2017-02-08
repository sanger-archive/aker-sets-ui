import React from 'react';
import { connect } from 'react-redux';
import { selectEntity, storeItems } from '../actions';
import { readEndpoint } from 'redux-json-api';
import SetTable from '../components/set_table.es6';

const mapStateToProps = ({ api, selected }) => {

  let props = {
    sets: api.sets.data.slice().sort((a, b) => a.attributes.created_at.localeCompare(b.attributes.created_at)),
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
      dispatch(selectEntity(id, 'sets'));

      dispatch(readEndpoint(`sets/${id}?include=materials`))
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
