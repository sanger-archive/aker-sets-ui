import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowWithStore} from 'enzyme-redux'
import sinon from 'sinon';
import store from '../../store.es6'
import ButtonsPanel from '../buttons_panel.es6';

describe('<ButtonsPanel />', () => {
  context('when rendering the buttons panel', () => {
    it('renders a buttons panel container', ()=> {
      let wrapper = shallowWithStore(<ButtonsPanel />, store);
      expect(wrapper.dive().find('form').length>0).to.equal(true);
    })
  })
});