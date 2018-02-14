import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import { BiomaterialTable } from '../components/biomaterial_table.es6';
import droppable from '../hocs/droppable.es6';
import { ItemTypes } from '../lib/item_types.es6';
import { readEndpoint } from 'redux-json-api';
import { clearSelection, storeItems, fetchFirstPageSetAndMaterials, deleteMaterialFromSet, appendMaterialsToSet } from '../actions/index.es6';
import { getSelectedTopMaterials } from '../selectors/index.es6';

let DroppableBiomaterialTable = droppable(BiomaterialTable);
const setTarget = {
  drop(props, monitor, component) {
    const { dispatch, set, materials } = props;
    const { biomaterial, selected } = monitor.getItem();

    if (!set.id ) return;

    let current_biomaterials = [];
    let new_biomaterials     = [];

    const bm_mapper = (bm) => { return { type: 'materials', id: bm.id }};

    if (materials[set.id].instances) {
      current_biomaterials = Object.values(materials[set.id].instances).map(bm_mapper);
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
        materials: {
          data: [...new_biomaterials]
        }
      }
    };
    dispatch(appendMaterialsToSet(new_biomaterials, set))
      .then(() => { return dispatch(clearSelection()) })
      .then(() => { return dispatch(fetchFirstPageSetAndMaterials(set.id)) });
    return;
  }
}

function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

DroppableBiomaterialTable = DropTarget(ItemTypes.BIOMATERIAL, setTarget, dropCollect)(DroppableBiomaterialTable);

const mapStateToProps = (state) => {
  return {
    biomaterials: getSelectedTopMaterials(state),
    materials: state.materials,
    removeable: true
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    onRemove(biomaterial) {
      const { set } = ownProps;
      return dispatch(deleteMaterialFromSet(biomaterial, set)).then(()=>{
        return dispatch(fetchFirstPageSetAndMaterials(set.id));
      });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DroppableBiomaterialTable);
