import React from 'react';
import { connect } from 'react-redux';
import { createResource } from 'redux-json-api';
import {shallow, mount} from 'enzyme';
import DroppableMaterialTable from '../droppable_material_table';
import { MaterialTable } from '../../components/material_table';
import store from '../../store'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-test-backend';


const DD = DragDropContext(HTML5Backend);

describe('<DroppableMaterialTable />', () => {
  it('should render the element', () => {
    let Droppable = DD(DroppableMaterialTable);
    const wrapper = mount(<Droppable store={store} ></Droppable>);

    expect(wrapper.find(MaterialTable).length).to.equal(1);
  });
});