import React from 'react';
import { connect } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux'
import sinon from 'sinon';
import store from '../../store.es6'

import ButtonsPanelContainer from '../buttons_panel_container.es6'
import StamperControl from '../../containers/stamper_control.es6'

describe('<ButtonsPanelContainer />', () => {

  let mapStateToProps;

  beforeEach(() => {
    mapStateToProps = (state) => {
      return {
        sets: state.search.sets,
        loading: state.loading,
      }
    }
  })

  it('should render at least one form', () => {
    const ConnectedComponent = connect(mapStateToProps, undefined)(ButtonsPanelContainer)
    const wrapper = shallowWithStore(<ConnectedComponent />, store);
    expect(wrapper.dive().find('form')).to.have.length(2);
  });

  // Test is disabled because Stamps are being hidden, will potentially be
  // re-enabled in future
  // it('should render the <StamperControl>', () => {
  //   const ConnectedComponent = connect(mapStateToProps, undefined)(ButtonsPanelContainer)
  //   const wrapper = shallowWithStore(<ConnectedComponent />, store);
  //   expect(wrapper.dive().contains(<StamperControl></StamperControl>)).to.equal(true);
  // });

  it('should handle creation of a new set by calling handleClickCreateNewSet', () => {
    const createNewSetSpy = sinon.spy();

    const mapDispatchToProps = (dispatch) => {
      return {
        createNewSet: createNewSetSpy,
        loading: { creatingSet: false }
      }
    }

    const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(ButtonsPanelContainer)
    const wrapper = shallowWithStore(<ConnectedComponent />, store);

    wrapper.dive().find("#create-set input").simulate('change', { target: {value: 'The Set'}});
    wrapper.dive().find("#create-set").simulate('submit', { preventDefault() {} });

    expect(createNewSetSpy.calledOnce).to.equal(true);
  });

  it('should handle adding materials into a set by calling handleClickAddMaterialsToSet', () => {
    const addMaterialsToSetSpy = sinon.spy();

    const mapDispatchToProps = (dispatch) => {
      return {
        addMaterialsToSet: addMaterialsToSetSpy
      }
    }

    const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(ButtonsPanelContainer)
    const wrapper = shallowWithStore(<ConnectedComponent />, store);
    wrapper.dive().find("#add-button").simulate('click', { preventDefault() {} });

    expect(addMaterialsToSetSpy.calledOnce).to.equal(true);
  });

  it('should handle removing materials from a set by calling handleClickRemoveMaterialsFromSet', () => {
    const removeMaterialsFromSetSpy = sinon.spy();

    const mapDispatchToProps = (dispatch) => {
      return {
        removeMaterialsFromSet: removeMaterialsFromSetSpy
      }
    }
    const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(ButtonsPanelContainer)
    const wrapper = shallowWithStore(<ConnectedComponent />, store);

    wrapper.dive().find("#remove-button").simulate('click', { preventDefault() {} });
    expect(removeMaterialsFromSetSpy.calledOnce).to.equal(true);
  });

})
