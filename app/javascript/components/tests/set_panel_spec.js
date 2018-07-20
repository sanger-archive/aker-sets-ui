import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {shallow} from 'enzyme';
import { SetPanelComponent } from '../set_panel'
import {Panel, Body} from '../panel';
import { MaterialTable } from '../../components/material_table';
import DroppableMaterialTable from '../../components/droppable_material_table';


describe('<SetPanelComponent />', () => {
  context('when no set is selected', () => {
    it('displays a body', () => {
      const wrapper = shallow(<SetPanelComponent></SetPanelComponent>);
      expect(wrapper.dive().find(Body).length).to.equals(1);
    });
  });
  context('when a set is selected', () => {
    let myset = {};
    let materials = [];

    beforeEach(() => {
      myset = {id:'my-id', attributes: {locked: false}};
      materials = [{ items: [], links: {}, meta: {}}];
    });

    it('displays the body for the set', () => {
      const wrapper = shallow(<SetPanelComponent set={myset} materials={materials}></SetPanelComponent>);
      expect(wrapper.dive().find(Body).length).to.equals(1);
    });

    context('when the set is locked', () => {

      beforeEach(()=>{ myset.attributes = {locked: true} });

      it('displays a locked set', () => {
        const wrapper = shallow(<SetPanelComponent set={myset} materials={materials}></SetPanelComponent>);
        const mt = wrapper.dive().find(MaterialTable);
        expect(mt).to.have.length(1);
        expect(mt.prop('removeable')).to.equal(false)
      });

    });

    context('when the set is not locked', () => {

      beforeEach(()=>{ myset.attributes = {locked: false} });

      it('displays a not locked set', () => {
        const wrapper = shallow(<SetPanelComponent set={myset} materials={materials}></SetPanelComponent>);
        const dmt = wrapper.dive().find(DroppableMaterialTable);
        expect(dmt).to.have.length(1);
        expect(dmt.prop('removeable')).to.equal(true)
      });

    })
  })
});
