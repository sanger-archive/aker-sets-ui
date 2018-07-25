import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import BottomSetPanel from '../bottom_set_panel'

describe('<BottomSetPanel />', () => {
  it('renders a panel with a body', () => {
    const set = {id: 'my_id', attributes: { name: 'My Set' }};
    let wrapper = shallow(<BottomSetPanel set={set} />);
    expect(wrapper.find('Body')).to.have.length(1);
  });
});
