import React from 'react';
import sinon from 'sinon';
import {shallow, mount} from 'enzyme';
import { connect } from 'react-redux';
import AddSetForm from '../add_set_form.es6';
import { createMockStore } from 'redux-test-utils';


describe('<AddSetForm />', () => {
  const getContext = (status) => {
    let store = createMockStore(status);
    let context = { store };
    return { context }
  }
  context('when displaying it', () => {
    it('shows the form', () => {
      const status = {};
      const wrapper = shallow(<AddSetForm></AddSetForm>, getContext(status));
      expect(wrapper.dive().find('form').length).to.equal(1);
    });
  });
});