import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowWithStore} from 'enzyme-redux'
import sinon from 'sinon';
import store from '../../store'
import CurrentSearch from '../current_search'

describe('<CurrentSearch />', () => {
  context('when no filters has been provided', () => {
    it('displays an empty message', () => {
      const wrapper = shallowWithStore(<CurrentSearch current={[]}></CurrentSearch>, store);
      expect(wrapper.dive().find('.well').text()).to.contains('No current search');
    });
  });

  context('when one filter has been provided', () => {
    it('displays the filter', () => {
      const wrapper = shallowWithStore(<CurrentSearch current={[{name: 'a name', comparator: '=>', value: 'a value'}]}></CurrentSearch>, store);
      expect(wrapper.dive().find('.well').text()).to.contains('a name => "a value"');
    });
  });

  context('when multiple filters have been provided', () => {
    it('displays the filters', () => {
      const wrapper = shallowWithStore(<CurrentSearch current={[{name: 'a name', comparator: '=>', value: 'a value'},
        {name: 'another name', comparator: '<=', value: 'another value'}]}></CurrentSearch>, store);
      expect(wrapper.dive().find('.well').text()).to.contains('a name => "a value"AND another name <= "another value"');
    });
  });

});