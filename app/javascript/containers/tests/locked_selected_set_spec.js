import React from 'react';
import { connect } from 'react-redux';
import { createResource } from 'redux-json-api';
import {shallow, mount} from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import LockedSelectedSet from '../locked_selected_set';
import { BiomaterialTable } from '../../components/biomaterial_table';
import store from '../../store'

const getContext = (status) => {
  let context = { store: createMockStore(status) };
  return { context }
}


describe('<LockedSelectedSet />', () => {
  it('should render the element', () => {
    const status = {
      api: {sets: {data: []}, materials: {data: []} },
      materials: [],
      removeable: false,
      selected: {top: null, bottom: null}
     };
    const wrapper = mount(<LockedSelectedSet></LockedSelectedSet>, getContext(status));

    expect(wrapper.find(BiomaterialTable).length).to.equal(1);
  });
});