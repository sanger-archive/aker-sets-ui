import React from 'react';
import { DropTarget } from 'react-dnd';
import { MaterialTable } from '../presentation/material_table';
import droppable from '../hocs/droppable';
import { ItemTypes } from '../lib/item_types';
import { clearSelection, storeItems } from '../actions/browser';

let DroppableMaterialTable = droppable(MaterialTable);

const setTarget = {
  drop(props, monitor, component) {
    const { onAdd, set, materials } = props;
    const { material, selected } = monitor.getItem();

    let new_materials     = [];

    // If there are selected materials, add them
    // even if user isn't dragging one of them
    if (selected.length > 0) {
      new_materials = selected;
    // other wise add the one being dragged
    } else {
      new_materials = [material];
    }

    return onAdd(new_materials);;
  }
}

function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

export default DropTarget(ItemTypes.BIOMATERIAL, setTarget, dropCollect)(DroppableMaterialTable);
