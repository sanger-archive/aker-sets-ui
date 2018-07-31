import React from 'react';
import { connect } from 'react-redux';
import { createResource } from 'redux-json-api';
import {shallow, mount} from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import DraggableSelectedSet from '../draggable_selected_set';
import { MaterialTable } from '../../components/material_table';
import store from '../../store'

const getContext = (status) => {
  let context = { store: createMockStore(status) };
  return { context }
}


describe('<DraggableSelectedSet />', () => {
  it('should render the element', () => {
    const status = {
      materials: {},
      browser: {selected: []},
      selected: {
        top: null, bottom: null
      },
      api: {
        sets:        { data: [] },
        materials:   { data: [] }
      }
     };
    let dispatch = sinon.spy();
    const wrapper = mount(<DraggableSelectedSet></DraggableSelectedSet>, getContext(status));

    expect(wrapper.find(MaterialTable).length).to.equal(1);
  });
});