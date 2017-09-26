import React from 'react';
import { connect } from 'react-redux';
import { createEntity } from 'redux-json-api';
import {shallow, mount} from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import DraggableSelectedCollection from '../draggable_selected_collection.es6';
import { BiomaterialTable } from '../../components/biomaterial_table.es6';
import store from '../../store.es6'

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
    let fetchTokenIfNeeded = sinon.spy();
    let dispatch = sinon.spy();
    const wrapper = mount(<DraggableSelectedCollection></DraggableSelectedCollection>, getContext(status));

    expect(wrapper.find(BiomaterialTable).length).to.equal(1);
  });
});