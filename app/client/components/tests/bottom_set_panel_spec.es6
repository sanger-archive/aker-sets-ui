import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import BottomSetPanel from '../bottom_set_panel.es6'

describe('<BottomSetPanel />', () => {
  context('when no resource is provided', () => {
    it('renders an empty panel', () => {
      let wrapper = shallow(<BottomSetPanel />);
      expect(wrapper.find('Body')).to.have.length(0);
    });
  });
  context('when a resource is provided', () => {
    it('renders a panel with a body', () => {
      const resource = {id: 'my_id'};
      let wrapper = shallow(<BottomSetPanel resource={resource} />);
      console.log(wrapper.find('Body'));
      expect(wrapper.find('Body')).to.have.length(1);
    });
  })
});
