import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import { BiomaterialTable } from '../components/biomaterial_table.es6';
import droppable from '../hocs/droppable.es6';
import { ItemTypes } from '../lib/item_types.es6';
import { updateEntity, readEndpoint } from 'redux-json-api';
import { clearSelection, storeItems } from '../actions';
import { getSelectedSetBiomaterials } from '../selectors';

let DroppableBiomaterialTable = droppable(BiomaterialTable);

const setTarget = {
  drop(props, monitor, component) {
    const { dispatch, set } = props;
    const { biomaterial, selected } = monitor.getItem();

    if (!set.id ) return;

    let current_biomaterials = [];
    let new_biomaterials     = [];

    const bm_mapper = (bm) => { return { type: bm.type, id: bm.id }};

    if (set.relationships.biomaterials.data) {
      current_biomaterials = set.relationships.biomaterials.data.map(bm_mapper)
    }

    // If there are selected biomaterials, add them
    // even if user isn't dragging one of them
    if (selected.length > 0) {
      new_biomaterials = selected.map(bm_mapper);
    // other wise add the one being dragged
    } else {
      new_biomaterials = [biomaterial].map(bm_mapper);
    }

    const entity = {
      type: set.type,
      id: set.id,
      relationships: {
        biomaterials: {
          data: [...current_biomaterials, ...new_biomaterials]
        }
      }
    };

    dispatch(updateEntity(entity))
      .then(() => {
        dispatch(clearSelection());
        return dispatch(readEndpoint(`${set.type}/${set.id}?include=biomaterials`))
      });

  }
}

function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

DroppableBiomaterialTable = DropTarget(ItemTypes.BIOMATERIAL, setTarget, dropCollect)(DroppableBiomaterialTable);

DroppableBiomaterialTable = connect()(DroppableBiomaterialTable)

const mapStateToProps = (state) => {
  return { biomaterials: getSelectedSetBiomaterials(state), removeable: true };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove(biomaterial) {
      const { set } = ownProps;

      const bm_filter = (bm) => bm.id != biomaterial.id;

      const entity = {
        type: set.type,
        id: set.id,
        relationships: {
          biomaterials: {
            data: set.relationships.biomaterials.data.filter(bm_filter)
          }
        }
      };

      dispatch(updateEntity(entity))
        .then(() => dispatch(readEndpoint(`${set.type}/${set.id}?include=biomaterials`)))
        .then((json) => dispatch(storeItems(json.included)) );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DroppableBiomaterialTable);
