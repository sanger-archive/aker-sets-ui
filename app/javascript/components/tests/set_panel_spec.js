import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {shallow} from 'enzyme';
import { SetPanelComponent } from '../set_panel'
import { Panel, Body, Heading } from '../panel';
import { MaterialTable } from '../../components/material_table';
import DroppableMaterialTable from '../../components/droppable_material_table';
import ExportButton from '../../components/export_button';


describe('<SetPanelComponent />', () => {

  let props;
  let wrappedSetPanelComponent;
  const setPanelComponent = () => {
    if (wrappedSetPanelComponent) {
      return wrappedSetPanelComponent;
    }
    wrappedSetPanelComponent = shallow(<SetPanelComponent {...props} />);
    return wrappedSetPanelComponent;
  }

  beforeEach(() => {
    props = {
      set: undefined,
      user_email: undefined,
      materials: undefined,
      match: undefined,
      location: undefined,
      onAdd: undefined,
      onRemove: undefined
    }
    wrappedSetPanelComponent = undefined
  })

  context('when no set is selected', () => {
    it('displays a body', () => {
      expect(setPanelComponent().dive().find(Body).length).to.equal(1);
    });
  });

  context('when a set is selected', () => {
    beforeEach(() => {
      props.set = { id:'my-id', attributes: { locked: false }};
      props.materials = [{ items: [], links: {}, meta: {}}];
      props.location = { search: '?searchBy=amount&order=-1' }
    });

    it('displays the body for the set', () => {
      expect(setPanelComponent().dive().find(Body).length).to.equal(1);
    });

    it('renders an <ExportButton />', () => {
      const heading = setPanelComponent().dive().find(Heading);
      expect(heading.find(ExportButton)).to.have.length(1);
    });

    it('passes history to the <ExportButton />', () => {
      const exportButton = setPanelComponent().dive().find(Heading).find(ExportButton);
      expect(exportButton.props().history).to.equal(props.history);
    });

    it('passes set to the <ExportButton />', () => {
      const exportButton = setPanelComponent().dive().find(Heading).find(ExportButton);
      expect(exportButton.props().set).to.equal(props.set);
    });

    context('when the set is locked', () => {

      beforeEach(() => {
        props.set = { id:'my-id', attributes: { locked: true }};
      });

      it('displays a locked set', () => {
        const mt = setPanelComponent().dive().find(MaterialTable);
        expect(mt).to.have.length(1);
        expect(mt.prop('removeable')).to.equal(false)
      });

    });

    context('when the set is not locked', () => {

      beforeEach(() => {
        props.set = { id:'my-id', attributes: { locked: false }};
      });

      it('displays an unlocked set', () => {
        const dmt = setPanelComponent().dive().find(DroppableMaterialTable);
        expect(dmt).to.have.length(1);
        expect(dmt.prop('removeable')).to.equal(true)
      });

    })
  })
});
