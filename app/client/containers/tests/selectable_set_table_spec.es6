import React from 'react';
import { connect } from 'react-redux';
import { createEntity } from 'redux-json-api';
import {shallow, mount} from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import SelectableSetTable from '../selectable_set_table.es6';
import SetTable from '../../components/set_table.es6';
import store from '../../store.es6'

const getContext = (status) => {
  let context = { store: createMockStore(status) };
  return { context }
}


describe('<SelectableSetTable />', () => {
  it('should render the element', () => {
    const status = {
      api: {sets: {data: []} },
      materials: [],
      selected: {top: []},
      removeable: false
     };
    //selectionType="top" setIdList={user_set_ids} 
    const wrapper = mount(<SelectableSetTable selectionType="top"></SelectableSetTable>, getContext(status));

    expect(wrapper.find(SetTable).length).to.equal(1);
  });
  it('should sort the set list by created_at', () => {

    let createdAt = (i) => { 
      return { 
        value: () => { 
          return i; 
        }, 
        localeCompare: (j) => {
          // Because this is a sort() comparator, we return +, - or 0 
          return i - j.value();
        } 
      } 
    };
    let buildSet = (i) => { return {id: i, attributes: { created_at: createdAt(i) }, meta: {size: 1} } };
    let list = [buildSet(3), buildSet(1), buildSet(2)];

    const status = {
      api: { sets: {data: [buildSet(3), buildSet(1), buildSet(2)]}},
      materials: [],
      selected: {top: []},
      removeable: false
     };
     
    const wrapper = mount(<SelectableSetTable selectionType="top"></SelectableSetTable>, getContext(status));
    let sets = wrapper.find(SetTable).props().sets;
    sets.forEach((set, i) =>  {
      expect(set.id).to.equal(i+1);
    });
  });

});