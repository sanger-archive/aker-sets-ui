import React from 'react';
import { shallow, mount } from 'enzyme';

import SetTable from '../set_table.es6';

const USER_TESTING_EMAIL = 'user@testing.email';

const testingSet = () => {
  return {
    id: 1,
    attributes: {
      name: 'A testing set',
      created_at: '11/11/11',
      locked: false,
      owner_id: USER_TESTING_EMAIL
    },
    meta: {
      size: 1
    }
  }
}

describe('<SetTable />', () => {

  context('when using the default params', () => {

    it('creates an empty table', function() {
      this.sets = [];
      this.wrapper = mount(<SetTable sets={ this.sets }/>);
      expect(this.wrapper.find('tbody tr')).to.have.length(0);
    })

    it('creates a table for a set', function() {
      this.sets = [testingSet(), testingSet()];
      this.wrapper = mount(<SetTable sets={ this.sets }/>);
      expect(this.wrapper.find('tbody tr')).to.have.length(2);
    })

  });

  context('when hideOwner is passed in props', function() {
    beforeEach(function() {
      this.sets = [testingSet(), testingSet()];
    })

    it('shows the owner if hideOwner is set to false', function() {
      this.wrapper = mount(<SetTable hideOwner={false} sets={ this.sets } />);
      expect(this.wrapper.text()).to.contain(USER_TESTING_EMAIL)
    })

    it('shows the owner if hideOwner is not set', function() {
      this.wrapper = mount(<SetTable sets={ this.sets } />);
      expect(this.wrapper.text()).to.contain(USER_TESTING_EMAIL)
    })

    it('does not show the owner if hideOwner is set to true', function() {
      this.wrapper = mount(<SetTable hideOwner sets={ this.sets } />);
      expect(this.wrapper.text()).to.not.contain(USER_TESTING_EMAIL)
    })

    it('does not show the owner if hideOwner is explicitly set to true', function() {
      this.wrapper = mount(<SetTable hideOwner={true} sets={ this.sets } />);
      expect(this.wrapper.text()).to.not.contain(USER_TESTING_EMAIL)
    })

  });
})