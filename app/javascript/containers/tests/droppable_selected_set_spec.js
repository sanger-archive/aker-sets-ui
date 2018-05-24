import React from 'react';
import { connect } from 'react-redux';
import { createResource } from 'redux-json-api';
import {shallow, mount} from 'enzyme';
import DroppableSelectedSet from '../droppable_selected_set';
import { BiomaterialTable } from '../../components/biomaterial_table';
import store from '../../store'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-test-backend';


const DD = DragDropContext(HTML5Backend);

describe('<DroppableSelectedSet />', () => {
  it('should render the element', () => {
    let Droppable = DD(DroppableSelectedSet);
    const wrapper = mount(<Droppable store={store} ></Droppable>);

    expect(wrapper.find(BiomaterialTable).length).to.equal(1);
  });
});