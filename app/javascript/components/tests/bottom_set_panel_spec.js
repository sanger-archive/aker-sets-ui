import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import BottomSetPanel from '../bottom_set_panel'

describe('<BottomSetPanel />', () => {
  context('when no set is provided', () => {
    it('renders an empty panel', () => {
      let wrapper = shallow(<BottomSetPanel />);
      expect(wrapper.find('Body')).to.have.length(0);
    });
  });
  context('when a set is provided', () => {
    it('renders a panel with a body', () => {
      const set = {id: 'my_id', attributes: { name: 'My Set' }};
      let wrapper = shallow(<BottomSetPanel set={set} />);
      expect(wrapper.find('Body')).to.have.length(1);
    });
  })
});
