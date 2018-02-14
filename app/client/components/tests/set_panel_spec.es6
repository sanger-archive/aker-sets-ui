import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {shallow} from 'enzyme';
import { SetPanelComponent } from '../set_panel.es6'
import {Panel, Body} from '../panel.es6';
import LockedSelectedSet from '../../containers/locked_selected_set.es6';
import DroppableSelectedSet from '../../containers/droppable_selected_set.es6';


describe('<SetPanelComponent />', () => {
  context('when no set is selected', () => {
    it('does not display a body', () => {
      const wrapper = shallow(<SetPanelComponent></SetPanelComponent>);
      expect(wrapper.dive().find(Body).length).not.to.equals(1);
    });
  });
  context('when a set is selected', () => {
    let myset = {};

    beforeEach(() => { myset = {id:'my-id', attributes: {locked: false}}; });

    it('displays the body for the set', () => {
      const wrapper = shallow(<SetPanelComponent set={myset}></SetPanelComponent>);
      expect(wrapper.dive().find(Body).length).to.equals(1);
    });

    context('when the set is locked', () => {

      beforeEach(()=>{ myset.attributes = {locked: true} });

      it('displays a locked set', () =>{
        const wrapper = shallow(<SetPanelComponent set={myset}></SetPanelComponent>);
        expect(wrapper.dive().find(LockedSelectedSet).length).to.equals(1);
      });

    });

    context('when the set is not locked', () => {

      beforeEach(()=>{ myset.attributes = {locked: false} });

      it('displays a not locked set', () => {
        const wrapper = shallow(<SetPanelComponent set={myset}></SetPanelComponent>);
        expect(wrapper.dive().find(DroppableSelectedSet).length).to.equals(1);
      });

    })
  })
});