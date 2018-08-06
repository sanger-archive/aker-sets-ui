import React from 'react';
import { shallow } from 'enzyme';
import CurrentSearch from '../current_search'

describe('<CurrentSearch />', () => {

  let props;
  let currentSearchWrapper;

  let currentSearch = () => {
    if (currentSearchWrapper) {
      return currentSearchWrapper;
    }
    currentSearchWrapper = shallow(<CurrentSearch {...props} />);
    return currentSearchWrapper;
  }

  beforeEach(() => {
    props = {
      current: undefined
    }
    currentSearchWrapper = undefined;
  })

  context('when no filters have been provided', () => {

    beforeEach(() => {
      props.current = []
    });

    it('displays an empty message', () => {
      expect(currentSearch().dive().find('.well').text()).to.contains('No current search');
    });
  });

  context('when one filter has been provided', () => {

    beforeEach(() => {
      props.current = [{ name: 'a name', comparator: '=>', value: 'a value' }]
    })

    it('displays the filter', () => {
      expect(currentSearch().dive().find('.well').text()).to.contains('a name => "a value"');
    });
  });

  context('when multiple filters have been provided', () => {

    beforeEach(() => {
      props.current = [
        { name: 'a name', comparator: '=>', value: 'a value' },
        { name: 'another name', comparator: '<=', value: 'another value' }
      ]
    })

    it('displays the filters', () => {
      expect(currentSearch().dive().find('.well').text())
        .to.contains('a name => "a value"AND another name <= "another value"');
    });
  });

});