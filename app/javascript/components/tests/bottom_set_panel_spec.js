import React from 'react';
import { shallow } from 'enzyme';
import { BottomSetPanel } from '../bottom_set_panel';

describe('<BottomSetPanel />', () => {

  let props;
  let shallowBottomSetPanel;

  const bottomSetPanel = () => {
    if (shallowBottomSetPanel) {
      return shallowBottomSetPanel;
    }
    shallowBottomSetPanel = shallow(<BottomSetPanel {...props} />);
    return shallowBottomSetPanel;
  }

  beforeEach(() => {
    props = {
      set: undefined,
      materials: undefined
    };

    shallowBottomSetPanel = undefined;
  })

  describe('render', () => {

    beforeEach(() => {
      props.set = {id: 'my_id', attributes: { name: 'My Set' }};
      props.materials = { items: [], links: {}, meta: {} };
    })

    it('renders a panel with a body', () => {
      expect(bottomSetPanel().find('Body')).to.have.length(1);
    });
  })
});
