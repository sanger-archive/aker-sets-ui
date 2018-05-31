import React from 'react';
import { connect } from 'react-redux';
import { createResource } from 'redux-json-api';
import {shallow, mount} from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import DraggableSelectedCollection from '../draggable_selected_collection';
import { BiomaterialTable } from '../../components/biomaterial_table';
import store from '../../store'

const getContext = (status) => {
  let context = { store: createMockStore(status) };
  return { context }
}


describe('<DraggableSelectedCollection />', () => {
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
    const wrapper = mount(<DraggableSelectedCollection></DraggableSelectedCollection>, getContext(status));

    expect(wrapper.find(BiomaterialTable).length).to.equal(1);
  });
});