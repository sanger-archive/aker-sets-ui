import React from 'react';
import { connect } from 'react-redux';
import { createResource } from 'redux-json-api';
import {shallow, mount} from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import StamperControl from '../stamper_control.es6';
import StamperPanel from '../../components/stamper_panel.es6';
import store from '../../store.es6'

const getContext = (status) => {
  let context = { store: createMockStore(status) };
  return { context }
}


describe('<StamperControl />', () => {
  it('should render the element', () => {
    const status = {
      stampsInfo: {stamps: []}
     };
    const wrapper = mount(<StamperControl></StamperControl>, getContext(status));

    expect(wrapper.find(StamperPanel).length).to.equal(1);
  });
});