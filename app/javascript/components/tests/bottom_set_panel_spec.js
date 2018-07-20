import React from 'react';
import { shallow } from 'enzyme';
import { BottomSetPanel } from '../bottom_set_panel';

describe('<BottomSetPanel />', () => {
  it('renders a panel with a body', () => {
    const set = {id: 'my_id', attributes: { name: 'My Set' }};
    const materials = { items: [], links: {}, meta: {} };
    let wrapper = shallow(<BottomSetPanel set={set} materials={materials} />);
    expect(wrapper.find('Body')).to.have.length(1);
  });
});
