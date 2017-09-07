import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowWithStore} from 'enzyme-redux'
import sinon from 'sinon';
import store from '../../store.es6'

import ButtonsPanel from '../buttons_panel.es6'
import StamperControl from '../../containers/stamper_control.es6'

describe('<ButtonsPanel />', () => {

  it('should render at least one form', () => {
    const sets = [];
    const wrapper = shallowWithStore(<ButtonsPanel sets={ sets }/>, store);
    expect(wrapper.dive().find('form')).to.have.length(3);
  });

  it('should render the <StamperControl>', () => {
    const sets = [];
    const wrapper = shallowWithStore(<ButtonsPanel sets={ sets }/>, store);
    expect(wrapper.dive().contains(<StamperControl></StamperControl>)).to.equal(true);
  });

  it('should handle creation of a new set by calling handleClickCreateNewSet', () => {
    const sets = [];
    const wrapper = shallowWithStore(<ButtonsPanel sets={ sets }/>, store);
    const spiedMethod = sinon.spy();
    const mockedEvent = { preventDefault: spiedMethod };
    wrapper.dive().find("#create-set button").simulate('click', mockedEvent);

    expect(spiedMethod.calledOnce).to.equal(true);
  });

  it('should handle adding materials into a set by calling handleClickAddMaterialsToSet', () => {
    const sets = [];
    const wrapper = shallowWithStore(<ButtonsPanel sets={ sets }/>, store);
    const spiedMethod = sinon.spy();
    const mockedEvent = { preventDefault: spiedMethod };
    wrapper.dive().find("#add-materials-to-set button").simulate('click', mockedEvent);

    expect(spiedMethod.calledOnce).to.equal(true);
  });

  it('should handle removing materials from a set by calling handleClickRemoveMaterialsFromSet', () => {
    const sets = [];
    const wrapper = shallowWithStore(<ButtonsPanel sets={ sets }/>, store);
    const spiedMethod = sinon.spy();
    const mockedEvent = { preventDefault: spiedMethod };
    wrapper.dive().find("#remove-materials-from-set button").simulate('click', mockedEvent);

    expect(spiedMethod.calledOnce).to.equal(true);
  });

})